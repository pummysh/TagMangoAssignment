import styled from "./Display.module.css";
import {useNavigate} from "react-router-dom";
// import {AiFillPlayCircle} from "react-icons/ai";

export const Display=()=>{
    const navigate=useNavigate();
    const goto=()=>{
        navigate("/home")
    }

    return <div onClick={()=>goto()} className={styled.display}>
        {/* <img src={"/strawberrystyle-click.gif"} alt="" /> */}
        <div>
        {/* <AiFillPlayCircle/> */}
        <b>Click here to play music</b>
        </div>
    </div>
}