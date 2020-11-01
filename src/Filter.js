import React,{useEffect,useState} from 'react'
import Rocket from './Rocket';

function Filter() {
    //define states
    const [year,setYear] = useState("");
    const [launch,setLaunch] = useState("");
    const [landing,setLanding] = useState("");
    const [data,setData] = useState([]);
    // const [checked,setChecked] = useState(false);
    
    //generate button
    var btn = [];
    for(let i=2006;i<2021;i++){
       btn.push(i);
    }
    //changing year
    function filter(e) {
      setYear(e.value);
    }
    //changing launch
    function filterLaunch(e) {
        setLaunch(e);
    }
      //changing landing
    function filterLanding(e) {
        setLanding(e);
    }

    useEffect(() => {
            fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${landing}&launch_year=${year}`).
            then(res=> res.json()).
            then(data=> setData(data))
    }, [year,launch,landing]);
  
    return (
        <div className="row">
        <div className="col-lg-3 col-xs-12 col-sm-12 col-md-5 filter-section">
           <div className="inner-left">
            <div className="text-center"><span className="btm-border">Launch Year</span></div>
                <div className="text-center">
                    {
                        btn.map(el=>{
                        return (<button onClick={(e)=>filter(e.target)} className= {`filt-btn`} value ={el} key = {el}>{el}</button>)
                        })
                    }
                </div>
                <div className="text-center" onClick={(e)=>filterLaunch(e.target.value)}>
                    <div className="text-center"><span className="btm-border">Successful Launch</span></div>
                    <button className="filt-btn" value="true">true</button>
                    <button className="filt-btn" value="false">false</button>
                </div>
                <div className="text-center" onClick={(e)=>filterLanding(e.target.value)}>
                    <div className="text-center"><span className="btm-border">Succesful Landing</span></div>
                    <button className="filt-btn" value="true">true</button>
                    <button className="filt-btn" value="false">false</button>
                </div>
           </div>
        </div>
        <Rocket data={data} className="col-lg-9 col-xs-12 col-sm-12 col-md-7"></Rocket>
        </div>
    )
}

export default Filter;
