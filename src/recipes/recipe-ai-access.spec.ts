import {
  canUserGenerateAiRecipe,
  freeAiGenerationsRemaining,
  FREE_AI_RECIPES_PER_USER,
} from './recipe-ai-access';

describe('recipe-ai-access', () => {
  it('allows premium users regardless of count', () => {
    expect(canUserGenerateAiRecipe(true, 99)).toBe(true);
    expect(freeAiGenerationsRemaining(true, 99)).toBeNull();
  });

  it('allows one free AI recipe for non-premium users', () => {
    expect(canUserGenerateAiRecipe(false, 0)).toBe(true);
    expect(freeAiGenerationsRemaining(false, 0)).toBe(
      FREE_AI_RECIPES_PER_USER,
    );
  });

  it('blocks further AI recipes after the free allowance', () => {
    expect(canUserGenerateAiRecipe(false, 1)).toBe(false);
    expect(freeAiGenerationsRemaining(false, 1)).toBe(0);
  });
});
