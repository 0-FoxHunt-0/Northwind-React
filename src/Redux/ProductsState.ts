import { createStore } from "redux";
import ProductModel from "../Models/ProductModel";

// 1. App State - Application Level State:

export class ProductsState {
  public products: ProductModel[] = [];
}

// 2. Action Type - list of actions needed on the data:

export enum ProductsActionType {
  FetchProducts = "FetchProducts",
  AddProduct = "AddProduct",
  UpdateProduct = "UpdateProduct",
  DeleteProduct = "DeleteProduct",
}

// 3. Action - a single object describing single operation on the data:

export interface ProductsAction {
  type: ProductsActionType; // What do we need to do?
  payload: any; // What data type do we need?
}

// 4. Reducer - function performing the needed actions:

export function productsReducer(
  currentState = new ProductsState(),
  action: ProductsAction
): ProductsState {
  const newState = { ...currentState };
  console.log(action);

  switch (action.type) {
    case ProductsActionType.FetchProducts: // Here the payload is the product list fetched by the server
      newState.products = action.payload;
      break;
      
      case ProductsActionType.AddProduct: // Here the payload is the added product
      newState.products.push(action.payload);
      break;
      
      case ProductsActionType.UpdateProduct:
        const indexToUpdate = newState.products.findIndex(p => p.id === action.payload.id)
        if (indexToUpdate !== -1) {
            newState.products[indexToUpdate] = action.payload;
        }
      break;

    case ProductsActionType.DeleteProduct: // here the payload is the ID of the product to delete
      const indexToDelete = newState.products.findIndex(p => p.id === action.payload.id)
      if (indexToDelete !== -1) {
        newState.products.splice(indexToDelete, 1);
      }
      break;
  }

  return newState;
}

// 5. Store - Redux manager:

export const productsStore = createStore(productsReducer);
