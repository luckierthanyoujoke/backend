/** Non-premium users may generate this many AI recipes (lifetime, by existing `isAI` rows). */
export const FREE_AI_RECIPES_PER_USER = 1;

export function canUserGenerateAiRecipe(
  isPremium: boolean,
  aiRecipeCount: number,
): boolean {
  return isPremium || aiRecipeCount < FREE_AI_RECIPES_PER_USER;
}

export function freeAiGenerationsRemaining(
  isPremium: boolean,
  aiRecipeCount: number,
): number | null {
  if (isPremium) return null;
  return Math.max(0, FREE_AI_RECIPES_PER_USER - aiRecipeCount);
}
