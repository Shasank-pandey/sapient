import React ,{useState}from 'react'

function Rocket({data}) {
    return (
        <div className="col-lg-9 col-xs-12 col-sm-12 col-md-7 row rock-body">
            { 
                data.map(el=>{
                    return (
                        <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 text-left rock-card">
                            <img className="rock-img" src={el.links.mission_patch}></img>
                            <p ><strong>Misson ID:</strong><span>{el.mission_id}</span></p>
                            <p ><strong>Launch year:</strong> <span>{el.launch_year}</span></p>
                            <p><strong>Launch success:</strong> <span>{el.launch_success.toString()}</span></p>
                            <p><strong>Landing success:</strong> <span>{el.launch_success.toString()}</span></p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Rocket;
