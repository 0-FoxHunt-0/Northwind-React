import { Fragment, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import appConfig from "../../../Utils/AppConfig";
import Spinner from "../../SharedArea/Spinner/Spinner";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {

    const params = useParams()

    const navigate = useNavigate()

    const [product, setProduct] = useState<ProductModel>()

    useEffect(() => {
        productsService.getProductById(+params.id)
            .then(product => setProduct(product))
            .catch(err => alert(err.message));
    }, []);

    async function deleteProduct() {
        try {

            const sure = window.confirm("Are you sure?");
            if(!sure) return

            await productsService.deleteProduct(product.id)
            alert("Product deleted successfully")
            navigate(-1)
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <div className="ProductDetails">

            { !product && <Spinner /> }

            { product &&
                <>
                    <div className="back">
                        <NavLink  to="/products">Back</NavLink>
                    </div>

                    <h3>Name: {product.name}</h3>
                    <h3>Name: {product.price}</h3>
                    <h3>Name: {product.stock}</h3>
                    <img src={product.imageUrl} alt={"Image of " + product.name} />

                    <br /><br />

                    <NavLink to={"/products/edit/" + product.id} className="btn btn-warning">Edit</NavLink>

                    <span> | </span>
                    
                    <NavLink to="#" onClick={deleteProduct} className="delete btn btn-danger">Delete</NavLink>
                    
                </>
            }
        </div>
    );
}

export default ProductDetails;
