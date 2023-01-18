import Copyrights from "../Copyrights/Copyrights";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Layout.css"
import Routing from "../Routing/Routing";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>

            <aside>
                <Menu />
            </aside>

            <main>
                <Routing />
            </main>

            <footer>
                <Copyrights />
            </footer>
        </div>
    );
}

export default Layout