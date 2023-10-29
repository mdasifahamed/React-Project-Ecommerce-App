import { Link } from "react-router-dom"
import { useMyContext } from "../../../MyContext"


const Product = ({product})=>{
    const {addToCart} = useMyContext();

    const handleaddtocart=()=>{
        addToCart(product);
    }
    return(
        <>
            <div className="card col-md-4">
                <img src={product?.image} className="card-img-top" width={200} height={150} alt="..." />
                <div className="card-body">

                    <Link to={`/product/${product.id}`}>
                        <h5 className="card-tittle" >{ product.title}</h5>
                    </Link>
               
                    <button onClick={handleaddtocart} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </>
        
    )
}

export default Product;