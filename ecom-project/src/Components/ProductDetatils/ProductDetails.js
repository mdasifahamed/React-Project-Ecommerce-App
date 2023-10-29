import { useParams } from "react-router-dom";
import { URL } from "../../Urls";
import { useEffect, useState } from "react";
import axios from "axios";


const Productdetails = ()=>{
    const {id} =useParams();

    const[product,setProduct] = useState(null);

    useEffect(()=>{
        if(id){
           getProduct(); 
        }
    },[])

    const getProduct =async ()=>{
        const respone = await axios.get(`${URL}/products/${id}`)
        setProduct(respone.data) 
    }
    console.log(product);
    return(
        <>

            <div className="card"  width={400} height={600}>
                <img src={product?.image} width={400} height={300} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{product?.title}</h5>
                        <p className="card-text">{product?.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price : {product?.price} </li>
                        <li className="list-group-item">Rating: {product?.rating.rate}  </li>
                    </ul>
                    <div className="card-body">
                        
                    </div>
            </div>
        </>
    )
}

export default Productdetails;