import styled from "./Navbar.module.css";
import {useNavigate} from "react-router-dom";

export const Navbar=()=>{
    const navigate=useNavigate();

    const goto=()=>{
        navigate("/home");
    }

    return  <nav >
    <ul>
        <li onClick={()=>goto()} className={styled.brand}>
            <img src={"/logo1.png.png"} alt="" />
            Music
        </li>
        <li onClick={()=>goto()}>Home</li>
        <li>About</li>

        
    </ul>
</nav>
}