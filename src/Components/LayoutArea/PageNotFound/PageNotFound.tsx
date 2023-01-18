import ReactPlayer from "react-player";
import "./PageNotFound.css";

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
            <div id="background">
                <div id="content">
                    <p>The page you are looking for doesn't exist</p>
                    <div className="player">
                        <ReactPlayer
                            width="100%"
                            height="100%"
                            url="https://www.youtube.com/watch?v=Qu10y6tMtiU"
                            controls
                            config={{
                                youtube: {
                                    playerVars: { showinfo: 1 }
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
