import HomePage from "./components/HomePage";
import NavBar from "./config/NavBar";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <NavBar />
            <HomePage />
            <div>
                <Outlet />
            </div>
        </div>
    )
}
export default Home;