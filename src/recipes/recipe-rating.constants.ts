/** Inclusive star scale (shown as e.g. 4.2/5 in the UI). */
export const RECIPE_RATING_MAX = 5;
export const RECIPE_RATING_MIN = 1;

export function assertRecipeRatingScore(score: number): void {
  if (
    !Number.isInteger(score) ||
    score < RECIPE_RATING_MIN ||
    score > RECIPE_RATING_MAX
  ) {
    throw new Error(
      `Rating must be an integer from ${RECIPE_RATING_MIN} to ${RECIPE_RATING_MAX}`,
    );
  }
}

export function roundRatingAverage(avg: number | null): number | null {
  if (avg === null || Number.isNaN(avg)) return null;
  return Math.round(avg * 10) / 10;
}
