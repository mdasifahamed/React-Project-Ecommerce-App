import { useMyContext } from "../../../MyContext";
import Product from "./Product";

const ProductList =()=>{
    const {conTextProducts} =useMyContext();
  
    return(
        <>
            <div className="row">
        {
            conTextProducts.map((product,index)=>{
            return <Product product={product} />
        })
        }
            </div>
        </>
       
    )
}

export default ProductList;