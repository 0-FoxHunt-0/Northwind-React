import "./Search.css";
import { ChangeEvent, useState } from "react";

function Search(): JSX.Element {

    const [item, setItem] = useState<string>("")

    // Way 1: using SyntheticEvent
    // function updateItem(args: SyntheticEvent): void {
    //     setItem((args.target as HTMLInputElement).value)
    // }

    // Way 2: using ChangeEvent<type> (ChangeEvent is a Generic function so you need to
    // provide a type otherwise it will not work, this way saved you using as)
    function updateItem(args: ChangeEvent<HTMLInputElement>): void {
        setItem((args.target as HTMLInputElement).value)
    }

    function clear(): void {
        setItem("");
    }

    return (
        <div className="Search Box">

			<label>Search: </label>

            <input type="text" onChange={updateItem} value={item} />

            <span>You are searching for: {item}</span>

            <button onClick={clear}> ❌ </button>

        </div>
    );
}

export default Search;
