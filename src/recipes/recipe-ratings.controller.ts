import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UnauthorizedException,
} from '@nestjs/common';
import type { User } from '@prisma/client';

import { CurrentUser } from '../common/decorators/current-user.decorator';
import { UpsertRecipeRatingDto } from './dto/upsert-recipe-rating.dto';
import { RecipesService } from './recipes.service';

@Controller()
export class RecipeRatingsController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get('recipes/:recipeId/rating')
  getRating(
    @Param('recipeId') recipeId: string,
    @CurrentUser() user: User | undefined,
  ) {
    return this.recipesService.getRecipeRatingSummary(recipeId, user?.id);
  }

  @Put('recipes/:recipeId/rating')
  upsertRating(
    @Param('recipeId') recipeId: string,
    @CurrentUser() user: User | undefined,
    @Body() body: UpsertRecipeRatingDto,
  ) {
    if (!user) {
      throw new UnauthorizedException(
        'Authentication required. Send a valid Clerk session token (Authorization: Bearer or __session cookie).',
      );
    }
    return this.recipesService.upsertRecipeRating(
      recipeId,
      user.id,
      body.score,
    );
  }

  @Delete('recipes/:recipeId/rating')
  deleteRating(
    @Param('recipeId') recipeId: string,
    @CurrentUser() user: User | undefined,
  ) {
    if (!user) {
      throw new UnauthorizedException(
        'Authentication required. Send a valid Clerk session token (Authorization: Bearer or __session cookie).',
      );
    }
    return this.recipesService.deleteRecipeRating(recipeId, user.id);
  }
}
