import { RegisterOptions } from "react-hook-form";

class ProductModel {

  public id: number;
  public name: string;
  public price: number;
  public stock: number;
  public imageUrl: string; // Image name given from backend
  public image: File; // Sending image file from form

  public static nameValidation: RegisterOptions = {
    required: { value: true, message: "Missing name!" },
    minLength: { value: 1, message: "Name must contain at least one char" },
    maxLength: { value: 50, message: "Name can't exceed 50 chars" }
  };

  public static priceValidation: RegisterOptions = {
    required: { value: true, message: "Missing price!" },
    min: { value: 0, message: "Price must be above 0" },
    max: { value: 100000, message: "Price must be lower than 100k" }
  }

  public static stockValidation: RegisterOptions = {
    required: { value: true, message: "Missing in stock!" },
    min: { value: 0, message: "Stock must be above 0" },
    max: { value: 1000, message: "Stock must be lower than 1000" }
  }

  public static imageValidation: RegisterOptions = {
    required: { value: true, message: "Missing image!" }
  }

}

export default ProductModel;
