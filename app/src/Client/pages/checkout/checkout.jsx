import { useEffect } from "react";

const Checkout=()=>{
    useEffect(() => {
        document.getElementById("image-header").style.display = "none";
        document.getElementById("header-client").style.minHeight="15vh";
        document.getElementById("header-client").style.margin="0";
        document.getElementById("header-client").style.backgroundImage="none";
        document.getElementById("header-client").style.background="#000";
        document.getElementById("header-client").style.color="#000";
        document.getElementById("footer").style.display = "none";
      }, []);
    return (
        <>
            <h1> VISTA CHECKOUT</h1>
        </>
        
    )
}

export default Checkout;