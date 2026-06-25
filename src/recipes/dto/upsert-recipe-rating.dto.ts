import { IsInt, Max, Min } from 'class-validator';
import {
  RECIPE_RATING_MAX,
  RECIPE_RATING_MIN,
} from '../recipe-rating.constants';

export class UpsertRecipeRatingDto {
  @IsInt()
  @Min(RECIPE_RATING_MIN)
  @Max(RECIPE_RATING_MAX)
  score!: number;
}
