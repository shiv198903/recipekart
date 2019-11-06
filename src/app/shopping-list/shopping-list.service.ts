import { Ingredient } from '../shared/ingredient,model';
import { Subject } from 'rxjs';

export class ShoppingListService {

    updateShoppingListEvent = new Subject<Ingredient[]>();
    startEditingItemEvent = new Subject<number>();

    private ingredients: Ingredient[] = [];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        ingredient.id = this.ingredients.length;
        this.ingredients.push(ingredient);
        this.updateShoppingListEvent.next(this.ingredients.slice());
    }

    addIngredients(ingredientsUp: Ingredient[]) {
        this.ingredients = this.ingredients.concat(ingredientsUp);
        this.updateShoppingListEvent.next(this.ingredients.slice());
    }

    getIngredient(index: number): Ingredient {
        return this.ingredients[index];
    }

    updateIngredient(ingredient: Ingredient) {
        const editIngredient = this.ingredients[ingredient.id];
        editIngredient.name = ingredient.name;
        editIngredient.amount = ingredient.amount;

    }
}
