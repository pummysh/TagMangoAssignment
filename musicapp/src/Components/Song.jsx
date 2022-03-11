import styled from "./song.module.css";

import { useContext } from "react"
import { Context } from "../Context/Context";
import {Navigate} from "react-router-dom";
import { Navbar } from "./Navbar";

export const Song=()=>{

    const {song}=useContext(Context);

    if(Object.keys(song).length===0){
        return <Navigate to="/home"/>
    }

    return <div>
        <Navbar/>
        <div className={styled.songCont}>
            <img src={song.cover_image} alt="" />
            <div>
            <div><b style={{color:"#D7385E"}}>Song</b> : {song.song}</div>
            <div><b style={{color:"#D7385E"}}>Artists</b> :{song.artists}</div>
            </div>
        </div>
        <br />
        <br />
        <audio style={{display:"flex",margin:"auto"}} controls>
            <source src={song.url} type="audio/mpeg" />
        </audio>

    </div>
}