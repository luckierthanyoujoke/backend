"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertRecipeRatingDto = void 0;
const class_validator_1 = require("class-validator");
const recipe_rating_constants_1 = require("../recipe-rating.constants");
class UpsertRecipeRatingDto {
    score;
}
exports.UpsertRecipeRatingDto = UpsertRecipeRatingDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(recipe_rating_constants_1.RECIPE_RATING_MIN),
    (0, class_validator_1.Max)(recipe_rating_constants_1.RECIPE_RATING_MAX),
    __metadata("design:type", Number)
], UpsertRecipeRatingDto.prototype, "score", void 0);
//# sourceMappingURL=upsert-recipe-rating.dto.js.map