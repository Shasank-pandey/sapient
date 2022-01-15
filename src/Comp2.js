import React,{useEffect,useState} from 'react'
import Rocket from './Rocket';

function Comp2() {
   
    useEffect(()=>{
        console.log("COMPONENTDIDMOUNT comp2")
        return ()=>{
            console.log("COMPONENT WILL UNMOUNT comp2")
        }
    },[]);


    return (
        <div className="row">
            comp2 component rendred
        </div>
    )
}

export default Comp2;


