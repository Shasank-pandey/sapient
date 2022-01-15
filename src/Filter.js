import React,{useEffect,useState} from 'react'
import Rocket from './Rocket';
import Comp2 from './Comp2';
import Comp3 from './Comp3';

function Filter() {
   const [flag,setFlag] = useState(false);
   const [data,setData] = useState([]);
   const [key,setKey] = useState('');
  
   function clickme(){
     setFlag(!flag);
   }
  
   useEffect(() => {
        fetch(`https://api.spacexdata.com/v3/launches?limit=4`).
        then(res=> res.json()).
        then(apiData=> setData(apiData))
   }, []);
   console.log(data);

   function picktext(text){
    setKey(text)
   }
    return (
        <div >
            <input onChange={(e)=>picktext(e.target.value)} type="text" /><br/>
            <button onClick={clickme}>click</button>
            {
                flag===false  ? (<Comp2/>) : (<Comp3/>)
            }
            <div>
               {
                   data.map(item=>{
                       return <div className="panel">
                           <p>name : <strong>{item.mission_name}</strong></p>
                           <p>launch year: {item.launch_year}</p>
                       </div>
                   })
               }
            </div>
       </div>
    )
}

export default Filter;
