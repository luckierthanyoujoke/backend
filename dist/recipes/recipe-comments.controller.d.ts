import type { User } from '@prisma/client';
import { CreateRecipeCommentDto } from './dto/create-recipe-comment.dto';
import { RecipesService } from './recipes.service';
export declare class RecipeCommentsController {
    private readonly recipesService;
    constructor(recipesService: RecipesService);
    listComments(recipeId: string, user: User | undefined): Promise<any>;
    createComment(recipeId: string, user: User | undefined, body: CreateRecipeCommentDto): Promise<any>;
    deleteComment(recipeId: string, commentId: string, user: User | undefined): Promise<{
        deleted: true;
    }>;
}
