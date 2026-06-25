"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RECIPE_RATING_MIN = exports.RECIPE_RATING_MAX = void 0;
exports.assertRecipeRatingScore = assertRecipeRatingScore;
exports.roundRatingAverage = roundRatingAverage;
exports.RECIPE_RATING_MAX = 5;
exports.RECIPE_RATING_MIN = 1;
function assertRecipeRatingScore(score) {
    if (!Number.isInteger(score) ||
        score < exports.RECIPE_RATING_MIN ||
        score > exports.RECIPE_RATING_MAX) {
        throw new Error(`Rating must be an integer from ${exports.RECIPE_RATING_MIN} to ${exports.RECIPE_RATING_MAX}`);
    }
}
function roundRatingAverage(avg) {
    if (avg === null || Number.isNaN(avg))
        return null;
    return Math.round(avg * 10) / 10;
}
//# sourceMappingURL=recipe-rating.constants.js.map