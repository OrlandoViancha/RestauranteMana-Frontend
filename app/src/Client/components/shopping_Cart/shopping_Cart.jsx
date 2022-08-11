import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ReactDOM from "react-dom"


let cart = [];
const ShoppingCart = () => {
  //const DeleteProduct = () => {};

  
  const CloseSidebar = (e) => {
    document.getElementById("sidebar_cart-shopping-container").style.width =
      "0%";
    document.getElementById("sidebar_cart-shopping-container").style.opacity =
      "0";
    document.getElementById("sidebar_cart-shopping").style.visibility =
      "hidden";
    document.getElementById("body").style.overflowY = "scroll";
  };

  useEffect(() => {

    if(localStorage.getItem("cart")!=null) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
    RenderCart()
    console.log(localStorage.getItem("cart").length);
    
  }, []);

  return (
    
    <div
      id="sidebar_cart-shopping-container"
      className="sidebar_cart-shopping-container"
    >
      <div id="sidebar_cart-shopping" className="sidebar_cart-shopping">
        <div className="sidebar_cart-shopping_title">
          <b>Your cart - {cart.length} items</b>
          <i onClick={CloseSidebar} class="fa-solid fa-xmark fa-2xl"></i>
        </div>
        <div
          id="cart_shopping-container"
          className="sidebar_cart-shopping_products-container"
        ></div>
        <div className="sidebar_cart-shopping_subtotal">
          <h3>Subtotal</h3> <b>$25000 COP</b>
        </div>
        <button className="btn btn-primary">CHECKOUT</button>
      </div>
    </div>
  );
};

const RenderProducts = () => {
    
  var content="";
  cart.map((value,index)=>{
 content+=` <div key=${index} class="sidebar_cart-shopping_products-content">
 <div class="sidebar_cart-shopping_products-content-img">
 <img src=${value.route} />
 </div>
 <div class="sidebar_cart-shopping_products-content-desc">
 <div class="sidebar_cart-shopping_products-content-desc_one">
     <b>${value.name}</b>
     <div>
     <button>-</button>
     <input type="numbre"     Value="20"></input>
     <button>+</button>
     </div>
     <b class="btn_remove">Remover</b>
 </div>

 <div class="sidebar_cart-shopping_products-content-desc_one">
     <p>$25000 COP</p>
 </div>
 </div>
</div>`
 
        }
      )
    document.getElementById("cart_shopping-container").innerHTML=content
  };

  export function RenderCart  ()  {

    RenderProducts()
     
    
    
  };
export function AddProduct(id, name, prize, route) {

    
  if (localStorage.getItem("cart") == null) {
    cart.push({
      id: id,
      name: name,
      prize: prize,
      route: route,
    });

    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
    var verify = false;

    for (let element of cart) {
      if (element.id === id) {
       
        verify = true;
        break;
      }
    }

    if (verify === false) {
      cart.push({
        id: id,
        name: name,
        prize: prize,
        route: route,
      });

      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  RenderCart();
}

export default ShoppingCart;
