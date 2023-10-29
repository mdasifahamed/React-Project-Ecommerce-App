import { createContext, useEffect, useState, useContext } from "react";
import { URL } from "./Urls";// Base url of The Server Api

// 
/*"MyContext" Is Name Of My Context Api Which Will Be Use Used In The Whole Project
    To Pass Data in The Components We Will Wrap The <App/> CompOnent With Our 
    "MyProvidervide" Componens This "My Provider Compnents Willcaryy Our Data"
*/
const MyContext = createContext()// Creating The Context
// "My Provider is the Component Which Will Carry The All the Data Via "Mycontext" "
const MyProvider =({children})=>{
    // "children is the object That Will help to render our child components"
    // Which we will used to display data.

    // For Setting Data In Catagory Components As There will Be More than One Catatgory
    // We Are Storing Those Catagory in the Array 
   const[conTextCatagories, setContextCataGories] =useState([])

   // For Setting All Products In The Products Component
   // As There A single Product Is An Object Threre Will More Than One Product 
   // We Are Also Storing Those Product Object In a Array
   const[conTextProducts, setContextProducts] =useState([])

    // For Setting Data In Cart Components
    // As In The Cart There Will Be More Than One Product
    // and Each Product is A object We Are Storing All 
    // Cart Product In An Array
   const[contextCart, setcontextCart] = useState([]);

   // "contextSelectedCatagory" This Will be Used to Select Catagory feature 
   // There will be button for each Catatgory And 
   // by Default Catagory is "All" Which Means We Want to Display all Product
   // If This Changes by Buttun click We Will Change the catagory And Display Selected catagory Products

   const[contextSelectedCatagory, setSelectetedContextCatagory]=useState("All");

   // Initially At First Render We Want Display Our All products
   // And All All Catagory At First render Form Our Server
   // As To Fecth Data From Saerver We Use "useEffect" hook
   // So the Below "useEffect" Will help us To fecth Data From Our Server 
   // and Set "conTextCatagories" & set "conTextProducts" by Usuing Two 
   // Function Call "loadCatatgories()", "loadProducts()" thesse tow fucntion will
   // handle fecthind data Data From server & 
   // Setting Those Data in "conTextCatagories" & set "conTextProducts"
   // Note: We Are not Using Any Dependencies In The UseEffect Hook that Why [] is empty
   //       Becasue at firt render we want everything from our ser for for catagory and 
   //       products

    useEffect(()=>{
    loadCatatgories();// fucntion to handle fecth cataory from server
    loadProducts();// function to handle fetch Products from sever.
   },[])// dependencies is empty


   // This "useEffect" is used For filtering purpose 
   // We Will be Displaying Producting Accoridng to selected catatgory
   // As "useEffect run on every we want stop here it"
   // becasue we only want to display if someone selected a catatory otherwise 
   // we display disp[aly everyprod
   // we have a new function here "loadSelectedCaatgoryProduct()" which will help
   // to fecth products from server as per catatgory.
   // And Our Dependecnties is here "contextSelectedCatagory" which is by default "All"
   useEffect(()=>{
        // If Someone press "All" button on the 
        // catatgory Section then We Display All the products
        if(contextSelectedCatagory === "All"){
            loadProducts();// Function For Fecthing all the Products From the Server
        }
        // otherwise We will Dsiplay Catagorywise product
        // by using loadSelectedCaatgoryProduct() which 
        // takes an Parameter that Parameter is the Catagory of the product
        // Which we want display
        else{
            loadSelectedCaatgoryProduct(contextSelectedCatagory);// Function for fecthing Catatgory wise Products from server 
        }

   },[contextSelectedCatagory])// Dependencies used

 

   
    
   const loadCatatgories=async()=>{
        const response = await fetch(`${URL}/products/categories`)
        const data = await response.json()
        // Setting The Data To "setContextCataGories" State
        // So that We Can grap At "conTextCatagories"
        setContextCataGories(data)
   }

   const loadProducts=async()=>{
    const response = await fetch(`${URL}/products`)
    const data = await response.json()
    // Setting The Data To "setContextProducts" State
    // So that We Can grap At "contextProducts"
    setContextProducts(data)
}


// Fucntion For Cataory Wise Product fetching
// Catagory is The parameter which going To be used To fetch Catatgory Wise Product
// We Will use This in The  second Useeffct and We will get "catagory" From "contextSelectedCatagory"
// and "contextSelectedCatagory" Will be Set At  CatagoryList Componennts. 
const loadSelectedCaatgoryProduct= async(catagory)=>{

    const response = await fetch(`${URL}/products/category/${catagory}`)
    const data = await response.json()
     
    setContextProducts(data)
}

const  addToCart=(product)=>{
    const exittingproductindex = contextCart.findIndex((item)=>
        item.id===product.id)
        if(exittingproductindex !== -1){
            const updateCart = [...contextCart];
            updateCart[exittingproductindex].quantity +=1;
            setcontextCart(updateCart);
        }else{
            setcontextCart([...contextCart,{...product,"quantity":1}])
        }

}

    const increaseQuantuty=(id)=>{
        const productindex = contextCart.findIndex((item)=> 
        item.id === id);
        const updateCart = [...contextCart];
        updateCart[productindex].quantity +=1;
        setcontextCart(updateCart);
        
    }
    const decreaseQuantity=(id)=>{
        const productindex = contextCart.findIndex((item)=> 
        item.id === id);
        const updateCart = [...contextCart];
        updateCart[productindex].quantity -=1;
        if(updateCart[productindex].quantity===0){
            updateCart.splice(productindex,1)
            setcontextCart(updateCart)
        }
        setcontextCart(updateCart);
    }

    const deleteProduct=(id)=>{
        const productIndex = contextCart.findIndex((item)=> item.id===id)
        const updatedCart = [...contextCart];
        updatedCart.splice(productIndex,1)
        setcontextCart(updatedCart);
    }

    const searchProduct=(keyword)=>{
        if(keyword){
            keyword = keyword.toLowerCase();
            const serachedProduct = conTextProducts.filter((products)=>{
                if(products.title.toLowerCase().includes(keyword)){
                    return true;
                }
                else{
                    return false;
                }
            })
            setContextProducts(serachedProduct);
        }
        else{
            loadProducts();
        }
        
       
        
    }
  
    

    return(
        <>
            <MyContext.Provider value={{
                conTextCatagories,
                conTextProducts,
                addToCart,
                contextCart,
                setSelectetedContextCatagory,
                increaseQuantuty,
                decreaseQuantity,
                deleteProduct,
                searchProduct,
                
            }
                
            }>
                {children}
            </MyContext.Provider>
        </>
        
    )
}

export function useMyContext(){
    return useContext(MyContext);
}

export default MyProvider;