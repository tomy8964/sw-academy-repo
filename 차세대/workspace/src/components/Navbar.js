import { useRecoilState, useRecoilValue } from "recoil";

import "../styles/NavbarStyles.css"
import { useNavigate } from "react-router-dom";
import { navbarItemState, navbarSelectedState } from "../contexts/selector";


function Navbar(props) {
    const [selected, setSelected] = useRecoilState(navbarSelectedState);
    const navItem = useRecoilValue(navbarItemState);

    const navigate = useNavigate();
    const scrollTo = props.scrollTo;

    function onClickMenu(e, index) {
        e.preventDefault();
        setSelected(index);
        scrollTo(index);
    }

    function onClickTitle(e) {
        e.preventDefault();
        navigate('/');
    }

    return (
        <nav className="NavbarItems">
            <h1 className="Navbar-logo" onClick={(e) => onClickTitle(e)}>SWAVE</h1>

            <ul className={selected ? "nav-menu active" : "nav-menu"}>
                {navItem.map((item, index) => {
                    return (
                        <li key={index} className={selected === index ? 'nav-links-active' : item.cName} onClick={(e) => onClickMenu(e, index)}>
                            {item.title}
                        </li>
                    )
                })}

            </ul>
            <button>Sign Up</button>
        </nav>
    )

}

export default Navbar;