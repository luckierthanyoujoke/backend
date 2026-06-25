import { ConfigService } from '@nestjs/config';
import { type Recipe } from '@prisma/client';
import { AiService } from '../ai/ai.service';
import { PrismaService } from '../prisma/prisma.service';
import { StorageService } from '../storage/storage.service';
import type { AiGenerateRecipeDto } from './dto/ai-generate-recipe.dto';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
export type RecipeRatingFields = {
    ratingMax: number;
    ratingsCount: number;
    ratingAverage: number | null;
    myRating: number | null;
};
export type AiGenerateRecipeResult = {
    recipe: Recipe;
    imageNote?: string;
};
export declare class RecipesService {
    private readonly prisma;
    private readonly aiService;
    private readonly storage;
    private readonly config;
    private readonly logger;
    constructor(prisma: PrismaService, aiService: AiService, storage: StorageService, config: ConfigService);
    getPublishedFeedFacets(): Promise<{
        categories: unknown[];
        tags: unknown[];
        diets: unknown[];
        restrictions: unknown[];
    }>;
    private idsMatchingFeedTextSearch;
    private normalizeDiet;
    private normalizeRestrictionsList;
    private idsMatchingIngredientIncludeAll;
    private idsMatchingIngredientExcludeAny;
    private idsMatchingRestrictionsIncludeAll;
    findPublishedFeed(currentUserId: string | undefined, params: {
        offset: number;
        limit: number;
        q?: string;
        tag?: string;
        category?: string;
        includeIng?: string;
        excludeIng?: string;
        diet?: string;
        restriction?: string;
    }): Promise<{
        items: ({
            id: string;
        } & RecipeRatingFields)[];
        nextOffset: number | null;
    }>;
    private mapFeedRow;
    findFavoritesForUser(userId: string): Promise<({
        id: string;
    } & RecipeRatingFields)[]>;
    findLikedRecipesForUser(userId: string): Promise<({
        id: string;
    } & RecipeRatingFields)[]>;
    likeRecipe(recipeId: string, userId: string): Promise<{
        likesCount: any;
        likedByMe: boolean;
    }>;
    unlikeRecipe(recipeId: string, userId: string): Promise<{
        likesCount: any;
        likedByMe: boolean;
    }>;
    saveRecipe(recipeId: string, userId: string): Promise<{
        savedByMe: boolean;
    }>;
    unsaveRecipe(recipeId: string, userId: string): Promise<{
        savedByMe: boolean;
    }>;
    private assertRecipeAccessibleForComments;
    listRecipeComments(recipeId: string, viewerUserId?: string): Promise<any>;
    createRecipeComment(recipeId: string, authorUserId: string, body: string): Promise<any>;
    deleteRecipeComment(recipeId: string, commentId: string, viewerUserId: string): Promise<{
        deleted: true;
    }>;
    private emptyRatingFields;
    private getRatingSummariesForRecipeIds;
    private attachRatings;
    getRecipeRatingSummary(recipeId: string, viewerUserId?: string): Promise<RecipeRatingFields>;
    upsertRecipeRating(recipeId: string, userId: string, score: number): Promise<RecipeRatingFields>;
    deleteRecipeRating(recipeId: string, userId: string): Promise<RecipeRatingFields>;
    findMine(userId: string): any;
    findById(id: string, viewerUserId?: string): Promise<{
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
    } & RecipeRatingFields>;
    findPublishedByUser(userId: string, viewerUserId?: string): Promise<({
        id: string;
    } & RecipeRatingFields)[]>;
    create(data: CreateRecipeDto, userId: string): any;
    updateForUser(id: string, userId: string, dto: UpdateRecipeDto): Promise<any>;
    generateAiRecipe(input: AiGenerateRecipeDto, userId: string): Promise<AiGenerateRecipeResult>;
    private parseImageDimension;
    uploadDishImageFromBase64(recipeId: string, userId: string, imageBase64Raw: string): Promise<any>;
    deleteForUser(id: string, userId: string): Promise<any>;
    publishForUser(id: string, userId: string): Promise<any>;
    unpublishForUser(id: string, userId: string): Promise<any>;
}
