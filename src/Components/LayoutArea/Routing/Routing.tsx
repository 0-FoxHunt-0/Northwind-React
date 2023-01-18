import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Login from "../../AuthArea/Login/Login";
import Register from "../../AuthArea/Register/Register";
import CategoriesList from "../../CategoriesArea/CategoriesList/CategoriesList";
import ContactUs from "../../ContactUsArea/ContactUs/ContactUs";
import Home from "../../HomeArea/Home/Home";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css"
function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Routes>
                {/* Another way to set default route to Home */}
                {/* <Route path="/" element={<Navigate to="/Home" />} /> */}

                {/* Default route is set to the Home page */}
                <Route index element={<Home />} />

                <Route path="/register" element={<Register />} />

                <Route path="/login" element={<Login />} />

                {/* Route to Products Page */}
                <Route path="/products" element={<ProductList />} />

                {/* Route to Product Details */}
                <Route path="/products/details/:id" element={<ProductDetails />} />

                {/* Route to Add Product */}
                <Route path="/products/new" element={<AddProduct />} />

                {/* Route to Edit Product */}
                <Route path="/products/edit/:id" element={<EditProduct />} />

                {/* Route to About Page */}
                <Route path="/about" element={<About />} />

                {/* Route to Categories Page */}
                <Route path="/Categories" element={<CategoriesList />} />

                {/* Route to Contact Us Page */}
                <Route path="/contact-us" element={<ContactUs />} />

                {/* Page Not Found */}
                <Route path="*" element={<PageNotFound />} />


            </Routes>

        </div>
    );
}

export default Routing;
