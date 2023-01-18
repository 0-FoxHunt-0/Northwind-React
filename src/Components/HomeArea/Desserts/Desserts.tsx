import "./Desserts.css";
import dessertsImage from "../../../Assets/Images/desserts.jpg"

function Desserts(): JSX.Element {

    const desserts = [ // Demo for getting a list from the backend side of the site
        { id: 1, name: "Ice Cream 🍨", price: 10 }, 
        { id: 2, name: "Apple Pie 🥧", price: 20 }, 
        { id: 3, name: "Donut 🍩", price: 15 }, 
        { id: 4, name: "Chocolate 🍫", price: 17 }, 
    ]

    return (
        <div className="Desserts Box">

            <img src={dessertsImage} alt="Dessert Image" />

            <span>Our Desserts: </span>

            {desserts.map(dessert => <span key={dessert.id}>{dessert.name} - $({dessert.price}) | </span>)}

        </div>
    );
}

export default Desserts;
