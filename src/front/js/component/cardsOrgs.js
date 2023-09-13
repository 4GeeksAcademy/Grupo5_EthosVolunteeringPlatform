import React from 'react'

const cardStyle = {
    width: "18rem",
    background: "#ffffff",
    textAlign: "center"
};

const imgStyle = {
    width: "18rem",
    height: "12rem"
}

export const CardsOrgs = ({ item }) => {
    return (
        <>

            <div className="container">

                <div className="row g-4 justify-content-md-center align-items-center">
                    {item.map((val) => (
                        <div className="col-lg-3 col-md-4" key={val.id}>
                            <div className="card" style={cardStyle}>
                                <img className="card-img-top img-fluid" src={val.img} style={imgStyle} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title text-dark"> {val.organization} </h5>
                                    <p className="card-text text-dark"> {val.description} </p>
                                    <p className="card-text text-dark "> <small className='bold'> Localidad:</small> <small>{val.locality}</small>  </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


