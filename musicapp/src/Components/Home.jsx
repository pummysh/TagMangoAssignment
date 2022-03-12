import {useContext, useEffect,useState} from "react";
import styled from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import { Navbar } from "./Navbar";
 
export const Home=()=>{

    const {setSong}=useContext(Context);

    const navigate=useNavigate();
    const [data,setData]=useState([]);
    const [display,setDisplay]=useState([]);

    const goto=(a)=>{
       setSong(a)
        navigate(`/song/${a.song}`);
        
    }

    useEffect(()=>{
        const baseURL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json';
        fetch(baseURL)
        .then(resp => resp.json())
        .then(data =>{ 
            setData(data);
            setDisplay(data);
        });

    },[])

    const slt=(e)=>{
        let a=e.target.value;

        if(a==="all"){
            setDisplay(data);
        }else{
        console.log("s",a);
        let b=data.filter(e=>{
            let q=e.artists.split(",");
                if(Array.isArray(q)){
                    console.log("sd",q[0]?.trim,q[1]?.trim());
                if(q[0]?.trim()===a || q[1]?.trim()===a){
                    return true;
                }else{
                    return false;
                }
            }else{
                if(q===e.artists){
                    return true;
                }else{
                    return false;
                }
            }
            
        });
        console.log("d",b)
        setDisplay(b);
    }
    }

    console.log(data);

    return <div id="home" className={styled.box}>
        <Navbar/>
        <select onChange={slt} className={styled.slt} name="" id="">
            <option hidden>Select Artist</option>
            <option value="all">Get all</option>
            <option value="Rahat Fateh Ali Khan">Rahat Fateh Ali Khan</option>
            <option value="Momina Mustehsan">Momina Mustehsan</option>
            <option value="Saieen Zahoor">Saieen Zahoor</option>
            <option value="Noori">Noori</option>
            <option value="Atif Aslam">Atif Aslam</option>
            <option value="Amjad Sabri">Amjad Sabri</option>
            <option value="Ali Zafar">Ali Zafar</option>
            <option value="Sara Haider">Sara Haider</option>
            <option value="Gul Panrra">Gul Panrra</option>
            <option value="Nabeel Shaukat Ali">Nabeel Shaukat Ali</option>
            <option value="Harshadeep Kaur">Harshadeep Kaur</option>
            <option value="Asim Azhar">Asim Azhar</option>
            <option value="Rachel Viccaji">Rachel Viccaji</option>
            <option value="Kashif Ali">Kashif Ali</option>

        </select>
        
        <div className={styled.container}>
            {
                display.map((e,i)=>
                    <div key={i} onClick={()=>goto(e)}>
                        <img src={e.cover_image} alt="" />
                        <div><b style={{color:"#D7385E"}}>Song</b> : <span style={{fontSize:"80%"}}>{e.song}</span></div>
                        <div><b style={{color:"#D7385E"}}>Artists</b> :<span style={{fontSize:"80%"}}>{e.artists}</span></div>
                    </div>
                )
            }
        </div>

    </div>
}