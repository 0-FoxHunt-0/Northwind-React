import "./BestSeller.css";
import { useState } from "react";

function BestSeller(): JSX.Element {

    // Wont Work!
    // let seller: string = "";
    // let rating: number = 0;

    // function getBestSeller(): void { // Demo for getting Best Seller from backend database
    //     seller = "Exotic Liquids"
    //     rating = 4.7;
    //     alert(`Best Seller ${seller}, Rating: ${rating}`);
    // }

    // ---------------------------------------------------------------------------------- //

    // Will Work
    const [seller, setSeller] = useState<string>("null")
    // The first item in the useState array is the item of which you want to change whilst
    // the second item is a function of which purpose is to re-render the component and
    // update it live

    const [rating, setRating] = useState<number>(-1)

    function getBestSeller(): void {
        setSeller("Exotic Liquids");
        setRating(4.7);
    }


    return (
        <div className="BestSeller Box">
            {rating >= 0 && <span>Best Seller: {seller}, Rating: {rating} </span>}
            <button onClick={getBestSeller}>Best Seller</button>
        </div>
    );
}

export default BestSeller;
