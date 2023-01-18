import CategoriesModel from "../../../Models/CategoriesModel";
import "./CategoriesCard.css";

interface CategoriesCardProps {
    category: CategoriesModel
}

function CategoriesCard(props: CategoriesCardProps): JSX.Element {

    return (
        <div className="CategoriesCard Box">
			
            <li>
                {props.category.name}
                <br />
                Price: {props.category.description}
                <br />
            </li>

        </div>
    );
}

export default CategoriesCard;
