import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CategoriesModel from "../../../Models/CategoriesModel";
import categoriesService from "../../../Services/CategoriesService";
import notify from "../../../Utils/Notify";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import "./CategoriesList.css";

function CategoriesList(): JSX.Element {

    const [categories, setCategories] = useState<CategoriesModel[]>([]);
    const navigate = useNavigate()

    useEffect(() => {
        categoriesService.getAllCategories()
            .then(categories => { setCategories(categories) })
            .catch((err: any) => {
                notify.error(err)
                navigate("/")
            })
    }, [])

    return (
        <div className="CategoriesList">

            <div className="list">
                <ul>
                    {categories.map(c => <CategoriesCard key={c.id} category={c} />)}
                </ul>
            </div>

        </div>
    );
}

export default CategoriesList;
