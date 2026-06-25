import { Module } from '@nestjs/common';
import { AiModule } from '../ai/ai.module';
import { StorageModule } from '../storage/storage.module';
import { RecipeCommentsController } from './recipe-comments.controller';
import { RecipeFavoritesController } from './recipe-favorites.controller';
import { RecipeRatingsController } from './recipe-ratings.controller';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';

@Module({
  imports: [AiModule, StorageModule],
  controllers: [
    RecipeCommentsController,
    RecipeRatingsController,
    RecipeFavoritesController,
    RecipesController,
  ],
  providers: [RecipesService],
})
export class RecipesModule {}
