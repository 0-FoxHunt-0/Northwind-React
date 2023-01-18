import { SyntheticEvent } from "react";
import "./Discount.css";

function Discount(): JSX.Element {

    const discount = 25

    function showDiscount(): void {
        alert(`Discount: ${discount}%`)
    }

    function showMessage(args: SyntheticEvent): void {
        console.log(args)
        alert(`We accept all credit cards`)
    }

    function buyNow(amount: number): void {
        alert(`Buy ${amount} get one free`)
    }

    return (
        <div className="Discount Box">

			<span>Only Now! - {discount}% off on all of out products!</span>

            <button onClick={showDiscount}> 💰 </button>
            <button onClick={showMessage}> 💳 </button>
            <button onClick={() => buyNow(3)}> 💲 </button>

        </div>
    );
}

export default Discount;
