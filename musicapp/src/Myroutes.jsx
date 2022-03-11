import {Routes,Route} from "react-router-dom";
import {Song} from "../src/Components/Song";
import {Home} from "../src/Components/Home";
import { Display } from "./Components/Display";

export const Myroutes=()=>{
    return <Routes>
        <Route path="/" element={<Display/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route  path="/song/:id" element={<Song/>}></Route>
    </Routes>
}