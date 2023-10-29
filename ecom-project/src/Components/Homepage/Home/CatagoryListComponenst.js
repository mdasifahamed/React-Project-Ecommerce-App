import { useMyContext } from "../../../MyContext";

const CataGoryList =()=>{
    const {conTextCatagories,setSelectetedContextCatagory} = useMyContext();// Importing useMyContext Function From MyContext.js


      
        // handleothercatatgorybtn() This Function is used 
        // Handle When Some On Click On Catatory
        // Product List will be Filtered According To That 
        // Cataogory handleothercatatgorybtn() this fucntion
        // take an parameter as catoray name which will be use d to filter
        // products on Mycontext.js and fectch products according to that
        // catagory
        const handleothercatatgorybtn=(catagory)=>{
            setSelectetedContextCatagory(catagory);
         
        }
    return(


          <>

              <div className="d-flex flex-column ">
              <button type="button" onClick={()=>{
                setSelectetedContextCatagory("All")
              }} className="btn btn-dark">All Products</button>

                  {// conTextCatagories has all the catatgory 
                    // So we can get all the catatgory that and set that in the button and
                    // used that retured catagory to setSelectetedContextCatagory() fucntion as as parameetrt 
                    conTextCatagories.map((catagory, index)=>{
                      return(
                          <button key={index} type="button" onClick={()=>{
                            setSelectetedContextCatagory(catagory)
                          }} className="btn btn-dark">{catagory}</button>
                  )
                  })}
              </div>
          </>
     );
}

export default CataGoryList;