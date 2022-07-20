import React from "react";


export default function Card(props){
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.img}/>
            </div>
            <span>{props.location} <a href={props.map} target="_blank">View on google maps</a></span>

        </div>
    )
}