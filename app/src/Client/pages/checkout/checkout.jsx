import { useEffect, useState } from "react";
import CardDirection from "../../components/card-direction/card-direction";
import ListOrders from "../../components/list-orders/list-orders";
import OrderItem from "../../components/order-item/order-item";
import "./checkout.css"
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Axios from "axios"
import ButtonPayload from "../../components/button-payload/button-payload";
const Checkout=()=>{
    const {cartItems,checkoutState,setCheckoutState,Total}=useContext(CartContext);
    const [preferenceId,setPreferenceId]=useState(localStorage.getItem("preferenceId"));
    const Checkout=(e)=>{
        
        
        e.preventDefault();
        Axios.post("http://localhost:3001/payload",{cartItems:cartItems})
        .then(response=>{
            setPreferenceId(response.data)
            setCheckoutState({state:true})
        })
        
        
        
        
        
        //document.getElementById("btn-checkout").style.display="none";

    }
    useEffect(() => {
        document.getElementById("image-header").style.display = "none";
        document.getElementById("header-client").style.minHeight="15vh";
        document.getElementById("header-client").style.margin="0";
        document.getElementById("header-client").style.backgroundImage="none";
        document.getElementById("header-client").style.background="#000";
        document.getElementById("header-client").style.color="#000";
        document.getElementById("footer").style.display = "none";
        
      }, []);

      useEffect(() => {

        localStorage.setItem("preferenceId",preferenceId)
      },[preferenceId])
      
      
    return (
        <>
        <div className=" container-general">

            <div className="container-shopping_information">
                <ListOrders>
                    <OrderItem></OrderItem>

                </ListOrders>
                <CardDirection title=" Direccion del Cliente" description="Kra 25 No 13-69"/>  
            </div>
            
               
                <div className="container-checkout">
                <div className="container-checkout_card-confirmation">
                        <div className="container-checkout_card-confirmation-title">Confirmacion de Pedido</div>
                        <div className="container-checkout_card-confirmation-total">Total
                        <div className="container-checkout_card-confirmation-total-value">${Total()}</div>
                        </div>
                        {
                             (checkoutState.state)
                             ?<ButtonPayload preferenceId={preferenceId}/>
                             :<button onClick={Checkout} id="btn-checkout"className="btn btn-primary">Confirmar Pedido</button>
                        }
                        
                </div>

                </div>
            
            
           
        </div>
        </>
        
    )
}

export default Checkout;