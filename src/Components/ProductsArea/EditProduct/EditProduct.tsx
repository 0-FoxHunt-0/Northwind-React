import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import appConfig from "../../../Utils/AppConfig";
import "./EditProduct.css";

function EditProduct(): JSX.Element {

    const [product, setProduct] = useState<ProductModel>()

    const { register, handleSubmit, formState, setValue } = useForm<ProductModel>()

    const navigate = useNavigate()

    const params = useParams()

    useEffect(() => {
        productsService.getProductById(+params.id)
        .then((product) => {
            console.log(product)
            setValue("id", product.id)
            setValue("name", product.name)
            setValue("price", product.price)
            setValue("stock", product.stock)
            setProduct(product)
        }).catch((err) => {
            alert(err.message)
        });
    }, [])

    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0]
            await productsService.updateProduct(product);
            alert("Product has been updated");
            navigate(-1)
        }
        catch (err: any) {}
    }

    return (
        <div className="EditProduct Box">

            <h2>Edit Product</h2>

            <form onSubmit={handleSubmit(send)}>

                <input type="hidden" { ...register("id")} />

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
                <input type="file" accept="image/*" { ...register("image")} />

                <img src={product?.imageUrl} alt="" />

                <button type="submit">Update</button>
                <br /><br />

            </form>

        </div>
    );
}

export default EditProduct;
