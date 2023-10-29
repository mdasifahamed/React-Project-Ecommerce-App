
import { useMyContext } from "../../MyContext"; // Importing useMyContext Function From MyContext.js
import { Link } from "react-router-dom";

const Cart=()=>{

    // "contextCart,increaseQuantuty,decreaseQuantity,deleteProduct"
    // All These Are Comming From Mycontext.js File Via usemyContext Function Which
    // Contains All The Context Property.
    const {contextCart,increaseQuantuty,decreaseQuantity,deleteProduct} = useMyContext();

   
    // getTotalprice() is a helper function
    // To display The Total Price Of The All 
    // All Product In the Cart
    // We Are Getting The All Products 
    // From ContextCart Product Array
    // Which Is Defined in the Usestae In MyContext.
    const getTotalprice = ()=>{
        let sum=0
        contextCart.map((el)=>{
            sum+=el.quantity * el.price;
        })
       sum = sum.toFixed(2);
       return sum;
    }
 
    return(
        <>

            <div className="tw-flex tw-w-full tw-items-center tw-justify-center tw-mt-4 tw-pr-12">
                <h1 className="tw-text-4xl tw-font-serif tw-tracking-widest">
                Products On Cart And Order Value Is : {getTotalprice()} </h1>
                <h1 className="tw-text-4xl tw-font-serif tw-tracking-widest">
                </h1>
            </div>
            {contextCart.map((product)=>{
                return(
                    <div className="tw-flex tw-flex-col" >
                <div className="tw-flex tw-flex-row tw-flex-streach tw-gap-2 tw-item-start tw-justify-start tw-w-4/5 tw-h-36 tw-border-2 tw-border-black p-5">
                    <div className="flex-wrap tw-20 tw-20 tw-border-2 tw-border-black ">
                        <img className=" tw-inset-0 tw-w-full tw-h-full tw-object-cover"
                            src={product?.image}
                            alt="" />
                        <p className="tw-text-sm"> 
                        Price : {product?.price}</p>
                    </div>

                    <div className="tw-w-32 tw-h-20 ">
                        <div className=" tw-w-32 tw-h-5 ">
                        <Link to={`/product/${product?.id}`}> <h1 className="tw-text-m tw-truncate .... ">{product?.title}</h1></Link>   
                        </div>
                        <div className="tw-flex tw-flex-row tw-items-center tw-gap-3  tw-m-2">
                            <button className="tw-text-s" onClick={()=>{
                                // increaseQuantuty() is Came From MyContext
                                // Via useMyContext() 
                                // Which takes product id as Parameter 
                                // To Incraese The Quantiy Of That Product 
                                // Inside The Cart 

                                increaseQuantuty(product?.id)
                            }}>+</button>
                            <p className="tw-text-s">{product?.quantity}</p>
                            <button className="tw-text-s" onClick={
                                ()=>{
                                    // decreaseQuantity() is Came From MyContext
                                    // Via useMyContext() 
                                    // Which takes product id as Parameter 
                                    // To Decrease The Quantiy Of That Product 
                                    // Inside The Cart  
                                    decreaseQuantity(product?.id)
                                }
                            }>-</button>
                        </div>
                    </div>

                    <div className="tw-ml-8 tw-p-.5">
                        <h1 className="tw-text-m">Quantity</h1>
                        <div className="tw-flex ftw-lex-row tw-items-center tw-gap-3  tw-m-2">
                            <p className="tw-text-s">{product?.quantity}</p>
                        </div>
                    </div>

                    <div className="tw-ml-8 tw-p-.5">
                        <h1 className="tw-text-m">Price Per Unit</h1>
                        <div className="tw-flex tw-flex-row tw-items-center tw-gap-3 tw-m-2">
                            <p className="tw-text-s">{product?.price}</p>
                        </div>
                    </div>

                    <div className="tw-ml-8 tw-p-.5">
                        <h1 className="tw-text-m">Total Price</h1>
                        <div className="tw-flex tw-flex-row tw-items-center tw-gap-3  tw-m-2">
                            <p className="tw-ext-s">{
                                // It Display the total price of A Individual Product.
                                product?.quantity * product?.price
                            }</p>
                        </div>
                    </div>
                    <div className="tw-ml-8 tw-p-5">
                        <button className="tw-bg-red-700  tw-text-neutral-100 tw-rounded-lg tw-w-40 tw-h-10"
                        onClick={()=>{
                            // This Funciton is Came From MyContext
                            // Via useMyContext() 
                            // Which takes product id as Paramaet To delete That 
                            // Product From The Cart.
                            deleteProduct(product?.id)
                        }}
                        >Delete From Cart</button>
                    </div>


                </div>

            </div>
                )
            })
        }
            
        </>
    )
}

export default Cart;