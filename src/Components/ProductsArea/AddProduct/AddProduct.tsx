import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import "./AddProduct.css";

function AddProduct(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<ProductModel>()

    const navigate = useNavigate()

    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0]
            await productsService.addProduct(product);
            console.log("Product has been added");
            navigate(-1)    
        }
        catch (err: any) {}
    }

    return (
        <div className="AddProduct Box">

            <h2>Add Product</h2>

            <form onSubmit={handleSubmit(send)}>

                <label>Name: </label>
                <input type="text" { ...register("name", ProductModel.nameValidation)} placeholder="Enter your product's name here"/>
                <span className="Err">{formState.errors.name?.message}</span>
                <br /><br />

                <label>Price: </label>
                <input type="number" step="0.01" { ...register("price", ProductModel.priceValidation)} placeholder="Enter your price here"/>
                <span className="Err">{formState.errors.price?.message}</span>
                <br /><br />

                <label>Stock: </label>
                <input type="number" { ...register("stock", ProductModel.stockValidation)} placeholder="Enter the amount in stock"/>
                <span className="Err">{formState.errors.stock?.message}</span>
                <br /><br />

                <label>Image: </label>
                <input type="file" accept="image/*" { ...register("image", ProductModel.imageValidation)} />
                <span className="Err">{formState.errors.image?.message}</span>

                <button type="submit">Add</button>
                <br /><br />

            </form>

        </div>
    );
}

export default AddProduct;
