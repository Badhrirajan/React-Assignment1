import React, {useState} from "react";

export default function Card({data = [], Cartvalue, setCartValue}){

    const [Buttonname, setButtonName] = useState("Add to Cart")

    const Handleclick = () => {
        if(Buttonname === "Add to Cart" ){
            setCartValue(Cartvalue + 1);
            setButtonName("Remove From Cart")
        } else {
            setCartValue(Cartvalue - 1);
            setButtonName("Add to Cart")
        }
    };

    return (
        <div className="col mb-5">
                    <div className="card h-100">
                        <img className="card-img-top" src={data.image} />
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5 className="fw-bolder">{data.name}</h5>
                                <span className="text-muted text-decoration-line-through">${data.price}</span>
                                 ${data.discount}
                            </div>
                        </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={Handleclick}>{Buttonname}</button></div>
                            </div>
                    </div>
                </div>
    );
}


