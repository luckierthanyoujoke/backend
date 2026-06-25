import {
  RECIPE_RATING_MAX,
  RECIPE_RATING_MIN,
  roundRatingAverage,
} from './recipe-rating.constants';

describe('recipe rating constants', () => {
  it('uses a 1–5 scale', () => {
    expect(RECIPE_RATING_MIN).toBe(1);
    expect(RECIPE_RATING_MAX).toBe(5);
  });

  it('rounds averages to one decimal', () => {
    expect(roundRatingAverage(4.256)).toBe(4.3);
    expect(roundRatingAverage(null)).toBeNull();
  });
});
