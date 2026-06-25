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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRatingsController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const upsert_recipe_rating_dto_1 = require("./dto/upsert-recipe-rating.dto");
const recipes_service_1 = require("./recipes.service");
let RecipeRatingsController = class RecipeRatingsController {
    recipesService;
    constructor(recipesService) {
        this.recipesService = recipesService;
    }
    getRating(recipeId, user) {
        return this.recipesService.getRecipeRatingSummary(recipeId, user?.id);
    }
    upsertRating(recipeId, user, body) {
        if (!user) {
            throw new common_1.UnauthorizedException('Authentication required. Send a valid Clerk session token (Authorization: Bearer or __session cookie).');
        }
        return this.recipesService.upsertRecipeRating(recipeId, user.id, body.score);
    }
    deleteRating(recipeId, user) {
        if (!user) {
            throw new common_1.UnauthorizedException('Authentication required. Send a valid Clerk session token (Authorization: Bearer or __session cookie).');
        }
        return this.recipesService.deleteRecipeRating(recipeId, user.id);
    }
};
exports.RecipeRatingsController = RecipeRatingsController;
__decorate([
    (0, common_1.Get)('recipes/:recipeId/rating'),
    __param(0, (0, common_1.Param)('recipeId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RecipeRatingsController.prototype, "getRating", null);
__decorate([
    (0, common_1.Put)('recipes/:recipeId/rating'),
    __param(0, (0, common_1.Param)('recipeId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, upsert_recipe_rating_dto_1.UpsertRecipeRatingDto]),
    __metadata("design:returntype", void 0)
], RecipeRatingsController.prototype, "upsertRating", null);
__decorate([
    (0, common_1.Delete)('recipes/:recipeId/rating'),
    __param(0, (0, common_1.Param)('recipeId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RecipeRatingsController.prototype, "deleteRating", null);
exports.RecipeRatingsController = RecipeRatingsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [recipes_service_1.RecipesService])
], RecipeRatingsController);
//# sourceMappingURL=recipe-ratings.controller.js.map