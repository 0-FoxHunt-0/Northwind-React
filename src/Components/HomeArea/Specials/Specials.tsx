import "./Specials.css";

function Specials(): JSX.Element {

    function isWeekend(): boolean {
        const now = new Date();
        const day = now.getDay() + 1;
        return day >= 6
    }

    return (
        <div className="Specials Box">
            <span>Out Specials: </span>

            {/* Operator Ternary */}
            { isWeekend() ? <span>Pizza ๐</span> : <span>Pasta ๐</span>}

            {/* Short Circuit */}
            { isWeekend() && <span>๐Fish && Chips๐</span>}

            {/* Short Circuit */}
            { isWeekend() || <span>Fish && Chips ๐ฃ</span>}

        </div>
    );
}

export default Specials;
