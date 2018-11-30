import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipeChanges = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            'This is simply a test', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
            [
                new Ingredient("Meat", 1), 
                new Ingredient("French Fries", 20)
            ]
            ),
        new Recipe(
            'Another Test Recipe', 
            'This is simply a test', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [new Ingredient("Oil", 2)]
            )
    ];

    constructor(private slService: ShoppingListService){}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanges.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number){
        return this.recipes[id];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanges.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;
        this.recipeChanges.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanges.next(this.recipes.slice());
    }
 }