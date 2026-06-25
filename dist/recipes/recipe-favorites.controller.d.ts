import type { User } from '@prisma/client';
import { RecipesService } from './recipes.service';
export declare class RecipeFavoritesController {
    private readonly recipesService;
    constructor(recipesService: RecipesService);
    favorites(user: User | undefined): Promise<({
        id: string;
    } & import("./recipes.service").RecipeRatingFields)[]>;
    liked(user: User | undefined): Promise<({
        id: string;
    } & import("./recipes.service").RecipeRatingFields)[]>;
    publishedByUser(userId: string, user: User | undefined): Promise<({
        id: string;
    } & import("./recipes.service").RecipeRatingFields)[]>;
}
