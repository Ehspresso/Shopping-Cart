//import { Outlet } from "react-router-dom";
import Cart from "./Cart";
import Featured from "../components/Featured";

export default function Home() {

    return(
        <>
            <div className="header">Shopping Cart</div>
            <div className="main">
                <div className="genres">
                    <h2>Genres</h2>
                    <ul>
                        <li>Action</li>
                        <li>Adventure</li>
                        <li>Indie</li>
                        <li>RPG</li>
                    </ul>
                </div>
                <div className="feature-list">
                    <h2>Featured List</h2>
                    <Featured />
                </div>
                <div className="cart"><Cart /></div>
            </div>
        </>
    );
}