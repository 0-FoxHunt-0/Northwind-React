import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import Spinner from "../../SharedArea/Spinner/Spinner";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([])

    useEffect(() => {
        productsService.getAllProducts()
            .then(products => { setProducts(products); })
            .catch(err => { alert(err.msg) })
    }, [])

    return (
        <div className="ProductList">

            { products.length === 0 && <Spinner /> }

            <NavLink to="/products/new"> ➕ </NavLink>

            <div className="list">
                {products.map(p => <ProductCard key={p.id} product={p} />)}
            </div>

        </div>
    );
}

export default ProductList;
