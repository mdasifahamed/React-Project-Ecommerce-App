import { useMyContext } from "../../../MyContext"; // Importing useMyContext Function From MyContext.js
import CataGoryList from "./CatagoryListComponenst";
import ProductList from "./ProductListComponents";

const Home=()=>{
    const{searchProduct} =useMyContext();

    return(
        <>
           <div className="row">
                <div className="col-md-3">
                    <CataGoryList/>
                </div>
                <div className="col-md-9">
                    <input onChange={(e)=>{
                        searchProduct(e.target.value);
                    }}placeholder="Search Products" type="search" className="form-control my-2 py-1" />
                    <ProductList/>
                </div>
           </div>
        </>
    )
}

export default Home;