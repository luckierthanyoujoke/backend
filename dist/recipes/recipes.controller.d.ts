import type { User } from '@prisma/client';
import { AiGenerateRecipeDto } from './dto/ai-generate-recipe.dto';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { UploadRecipeDishImageDto } from './dto/upload-dish-image.dto';
import { type AiGenerateRecipeResult, RecipesService } from './recipes.service';
export declare class RecipesController {
    private readonly recipesService;
    constructor(recipesService: RecipesService);
    feedFacets(): Promise<{
        categories: unknown[];
        tags: unknown[];
        diets: unknown[];
        restrictions: unknown[];
    }>;
    feed(user: User | undefined, offsetRaw?: string, limitRaw?: string, q?: string, tag?: string, category?: string, includeIng?: string, excludeIng?: string, diet?: string, restriction?: string): Promise<{
        items: ({
            id: string;
        } & import("./recipes.service").RecipeRatingFields)[];
        nextOffset: number | null;
    }>;
    myRecipes(user: User | undefined): any;
    aiGenerate(user: User | undefined, body: AiGenerateRecipeDto): Promise<AiGenerateRecipeResult>;
    uploadDishImage(id: string, user: User | undefined, body: UploadRecipeDishImageDto): Promise<any>;
    create(user: User | undefined, body: CreateRecipeDto): any;
    publish(id: string, user: User | undefined): Promise<any>;
    unpublish(id: string, user: User | undefined): Promise<any>;
    update(id: string, user: User | undefined, body: UpdateRecipeDto): Promise<any>;
    like(id: string, user: User | undefined): Promise<{
        likesCount: any;
        likedByMe: boolean;
    }>;
    unlike(id: string, user: User | undefined): Promise<{
        likesCount: any;
        likedByMe: boolean;
    }>;
    save(id: string, user: User | undefined): Promise<{
        savedByMe: boolean;
    }>;
    unsave(id: string, user: User | undefined): Promise<{
        savedByMe: boolean;
    }>;
    findOne(id: string, user: User | undefined): Promise<{
        id: any;
        title: any;
        ingredients: any;
        steps: any;
        category: any;
        tags: any;
        diet: any;
        restrictions: any;
        imageUrl: any;
        isAI: any;
        isPublished: any;
        userId: any;
        createdAt: any;
        updatedAt: any;
        user: any;
        likesCount: any;
        likedByMe: boolean;
        savedByMe: boolean;
    } & import("./recipes.service").RecipeRatingFields>;
    remove(id: string, user: User | undefined): Promise<any>;
}
