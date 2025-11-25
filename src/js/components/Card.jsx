import React from "react";

const Card = ({img, title, text}) => {

     const cardStyle = {
        width: '18rem'
    }

    return (
        <div className="card h-100">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card