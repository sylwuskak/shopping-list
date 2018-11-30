import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private rService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        let token = this.authService.getToken();

        return this.http.put('https://shopping-list-55977.firebaseio.com/recipes.json?auth=' + token, this.rService.getRecipes());
    }

    getRecipes() {
        let token = this.authService.getToken();
            
        return this.http.get('https://shopping-list-55977.firebaseio.com/recipes.json?auth=' + token).subscribe(
            (response: Response) => {
                const data: Recipe[] = response.json();
                this.rService.setRecipes(data);
            }
        );
    }
}