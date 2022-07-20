import React from "react";


export default function Card(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.img} />
            </div>
            <div>
                <span>{props.country} <a href={props.location} target="_blank">View on google maps</a></span>
                <h1>{props.place}</h1>
                <p>{props.info}</p>
            </div>
        </div>
    )
}