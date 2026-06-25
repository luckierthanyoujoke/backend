import type { User } from '@prisma/client';
import { UpsertRecipeRatingDto } from './dto/upsert-recipe-rating.dto';
import { RecipesService } from './recipes.service';
export declare class RecipeRatingsController {
    private readonly recipesService;
    constructor(recipesService: RecipesService);
    getRating(recipeId: string, user: User | undefined): Promise<import("./recipes.service").RecipeRatingFields>;
    upsertRating(recipeId: string, user: User | undefined, body: UpsertRecipeRatingDto): Promise<import("./recipes.service").RecipeRatingFields>;
    deleteRating(recipeId: string, user: User | undefined): Promise<import("./recipes.service").RecipeRatingFields>;
}
