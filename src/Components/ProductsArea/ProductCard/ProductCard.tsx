import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import appConfig from "../../../Utils/AppConfig";
import "./ProductCard.css";

interface ProductCardProps {
    product: ProductModel;
}

function ProductCard(props: ProductCardProps): JSX.Element {

    return (
        <div className="ProductCard Box">

            <div>
                {props.product.name}
                <br />
                Price: {props.product.price}
                <br />
                Stock: {props.product.stock}
                <br />
            </div>

            <div>
                <NavLink to={"/products/details/" + props.product.id}>
                    <img src={props.product.imageUrl} alt="" />
                </NavLink>
            </div>

        </div>
    );
}

export default ProductCard;
