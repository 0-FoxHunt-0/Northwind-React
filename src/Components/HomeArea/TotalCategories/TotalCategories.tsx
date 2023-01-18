import categoriesService from "../../../Services/CategoriesService";
import "./TotalCategories.css";

function TotalCategories(): JSX.Element {

    async function show() {
        try {
            const count = await categoriesService.getCategoriesCount();
            alert("Total categories count: " + count)
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <div className="TotalCategories Box">

			<button onClick={show}>Total Categories</button>

        </div>
    );
}

export default TotalCategories;
