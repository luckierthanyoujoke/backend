/**
 * Adds demo star ratings (1–5) across recipes.
 *
 * Requires: DATABASE_URL (and migrated schema with RecipeRating).
 * Requires at least one user in DB.
 *
 * Run: npm run db:seed-ratings
 *
 * Each run adds new ratings where (userId, recipeId) is not already taken.
 */
import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';
import { resolve } from 'node:path';

import {
  RECIPE_RATING_MAX,
  RECIPE_RATING_MIN,
} from '../src/recipes/recipe-rating.constants';

config({ path: resolve(__dirname, '../.env') });

const prisma = new PrismaClient();

function rndInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick<T>(items: readonly T[]): T {
  return items[rndInt(0, items.length - 1)]!;
}

function pickRater(userIds: string[], recipeAuthorId: string): string {
  const others = userIds.filter((id) => id !== recipeAuthorId);
  const pool = others.length > 0 ? others : userIds;
  return pick(pool);
}

async function main() {
  const recipes = await prisma.recipe.findMany({
    select: { id: true, userId: true },
    orderBy: { createdAt: 'asc' },
  });
  const users = await prisma.user.findMany({ select: { id: true } });

  if (users.length === 0) {
    throw new Error('No users found — seed users first (npm run db:seed).');
  }
  if (recipes.length === 0) {
    console.log('No recipes — nothing to do.');
    return;
  }

  const userIds = users.map((u) => u.id);
  const minRatings = 2;
  const maxRatings = 6;

  const rows: { recipeId: string; userId: string; score: number }[] = [];

  for (const r of recipes) {
    const n = rndInt(minRatings, maxRatings);
    const used = new Set<string>();
    for (let i = 0; i < n; i++) {
      const userId = pickRater(userIds, r.userId);
      const key = `${userId}:${r.id}`;
      if (used.has(key)) continue;
      used.add(key);
      rows.push({
        recipeId: r.id,
        userId,
        score: rndInt(RECIPE_RATING_MIN, RECIPE_RATING_MAX),
      });
    }
  }

  const result = await prisma.recipeRating.createMany({
    data: rows,
    skipDuplicates: true,
  });

  console.log(
    `Done — inserted ${result.count} rating(s) (attempted ${rows.length} across ${recipes.length} recipe(s), scale ${RECIPE_RATING_MIN}–${RECIPE_RATING_MAX}).`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
