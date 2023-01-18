import css from "./Clock.module.css";
import { useEffect, useState } from "react"

function Clock(): JSX.Element {

    const [time, setTime] = useState<string>("")

    useEffect(() => {

        // Create timer once:
        const timerId = setTimeout(() => {
            const now = new Date()
            setTime(now.toLocaleTimeString())
        }, 1000)

        // Kill timer function when the component gets destroyed by React
        // * The component gets destroyed when not needed for example switching tabs in the site
        return () => { clearTimeout(timerId) };
    }, [time])

    // Don't do! very bad!
    // setInterval(() => {
    //     const now = new Date()
    //     setTime(now.toLocaleTimeString())
    //     console.log(now.toLocaleTimeString())
    // }, 1000)

    return (
        <div className="Clock Box">
            <p className={css.CoolBackground}>
                <span className={css.FontColor}>{time}</span>
            </p>
        </div>
    );
}

export default Clock;
