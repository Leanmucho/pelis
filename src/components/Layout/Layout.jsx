import { Outlet } from "react-router-dom";
import Home from "../home/Home";

export default function Layout(){
    return(
        <div>
        <nav>
            <ul>
                <li>
                    <Link to="/"><Home /></Link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
        </div>
    );
}