
import { Link } from "react-router-dom";
import './header.css';
const Header = ({ cart }) => {
    return (
        <div className="head">
            <div className="logo">foodcart</div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cart">
                    <span className="count">{cart.length}</span>Cart</Link>
                </li>
            </ul>
        </div>
    );
};
export default Header;