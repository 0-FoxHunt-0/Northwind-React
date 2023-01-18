import BestSeller from "../BestSeller/BestSeller";
import Clock from "../Clock/Clock";
import ClockEx from "../ClockEx/ClockEx";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Sale from "../Sale/Sale";
import Search from "../Search/Search";
import Specials from "../Specials/Specials";
import TotalCategories from "../TotalCategories/TotalCategories";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
            {/* Interpolation */}
            <Discount />

            {/* Conditional Rendering */}
            <Specials />

            {/* Displaying Lists */}
            <Desserts />

            {/* Props */}
            <Sale percent={10} category="Beverages" />
            <Sale percent={15} category="Candies" />

            {/* State */}
            <BestSeller />

            {/* Two Way Binding */}
            <Search />

            {/*  */}
            <Clock />

            {/* Interceptor */}
            <TotalCategories />

            {/* Class Component */}
            <ClockEx format="12h" />

        </div>
    );
}

export default Home;
