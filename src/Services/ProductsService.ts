import axios from "axios";
import ProductModel from "../Models/ProductModel";
import { ProductsActionType, productsStore } from "../Redux/ProductsState";
import appConfig from "../Utils/AppConfig";

class ProductsService {
  public async getAllProducts(): Promise<ProductModel[]> {
    // Take products from global state:
    let products = productsStore.getState().products;

    // If we dont have products
    if (products.length === 0) {
      // Fetch products from backend
      const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
      products = response.data;

      // Send all products into redux global state which will call the Reducer
      productsStore.dispatch({
        type: ProductsActionType.FetchProducts,
        payload: products,
      });
    }

    // Return products
    return products;
  }

  public async getProductById(id: number): Promise<ProductModel> {
    //Take product from global state:
    let products = productsStore.getState().products;

    //find needed product from global state:
    let product = products.find((p) => p.id === id);

    //if product not found:
    if (!product) {
      const response = await axios.get<ProductModel>(
        appConfig.productsUrl + id
      );
      product = response.data;
    }

    return product;
  }

  public async addProduct(product: ProductModel): Promise<void> {
    // Tell axios that we're sending text and file to backend:
    const headers = { "Content-Type": "multipart/form-data" };

    const response = await axios.post<ProductModel>(
      appConfig.productsUrl,
      product,
      { headers }
    );
    const addedProduct = response.data;

    productsStore.dispatch({
      type: ProductsActionType.AddProduct,
      payload: addedProduct,
    });
  }

  public async deleteProduct(id: number): Promise<void> {
    await axios.delete<ProductModel>(appConfig.productsUrl + id);

    productsStore.dispatch({
      type: ProductsActionType.DeleteProduct,
      payload: id,
    });
  }

  public async updateProduct(product: ProductModel): Promise<void> {
    // Tell axios that we're sending text and file to backend:
    const headers = { "Content-Type": "multipart/form-data" };

    const response = await axios.put<ProductModel>(
      appConfig.productsUrl + product.id,
      product,
      { headers }
    );
    const updatedProduct = response.data;

    productsStore.dispatch({
      type: ProductsActionType.UpdateProduct,
      payload: updatedProduct,
    });
  }
}

const productsService = new ProductsService();

export default productsService;
