import { Component } from "react";
import "./ClockEx.css";

interface ClockExProps {
	format: string; // 12h / 24h
}

interface ClockExState {
	time: string; 
}

// class ClockEx extends Component { // No props, no state
// class ClockEx extends Component<ClockExProps> { // Props, no state
// class ClockEx extends Component<{}, ClockExState> { // No props, state
class ClockEx extends Component<ClockExProps, ClockExState> { // Props, state

    private timerId: number; // Used for stopping the interval timer

    public constructor(props: ClockExProps) {
        super(props);

        // Init our state:
        this.state = { time:  ""};
    }

    public componentDidMount(): void {
        this.timerId = window.setInterval(() => {
            const now = new Date();
            const currentTime = now.toLocaleTimeString("en-US", {hour12: (this.props.format === "12h")})
            this.setState({time: currentTime})
        }, 1000)
    }

    // Overriding componentWillUnmount - run side-effects only once - when component gets destroyed:
    public componentWillUnmount(): void {
        clearInterval(this.timerId)
    }

    public render(): JSX.Element {
        return (
            <div className="ClockEx Box">
				
                <span>{this.state.time}</span>

            </div>
        );
    }
}

export default ClockEx;
