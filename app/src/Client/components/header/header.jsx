import React from "react";
import './header.css'

import ShoppingCart from "../shopping_Cart/shopping_Cart";
const header = () => {

   const  OpenSidebar = (e) => {
        document.getElementById("sidebar_cart-shopping-container").style.width =
          "100%";
        document.getElementById("sidebar_cart-shopping-container").style.opacity =
          "1";
        document.getElementById("sidebar_cart-shopping").style.visibility =
          "visible";
        document.getElementById("body").style.overflow = "hidden";
      };

  return <>
        
        <div id="header-client"className="header-blue">
            <nav id="navbar-client" style={{zIndex:"100"}}className="navbar navbar-light  navbar-expand-md ">
                <div className="container-fluid"><img/><a className="navbar-brand" href="./">EL MANA</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse"
                        id="navcol-1">
                        <ul className="nav navbar-nav mx-auto">
                            <li className="nav-item" role="presentation"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Quienes Somos</a></li>
                        </ul>
                        <span className="navbar-text"> 
                        <a className="login"  href="./login">LogIn</a></span>
                        <a className="btn btn-light action-button"style={{
                            fontFamily: "'PT Mono', sans-serif",
                            fontWeight: "400",
                            font: "normal",
                        }} role="button" href="./registrer">Signup</a>
                       
                    </div>
                    <a onClick={OpenSidebar}><i class="fa-solid fa-bag-shopping fa-2xl"></i></a>
                </div>
                <ShoppingCart/>
            </nav>
            <div className=" image-header container hero" id="image-header">
                <div className="row">
                    <div className="">
                        <h1>NUESTROS PRODUCTOS</h1>
                        
                        <button
                            className="btn btn-light btn-lg action-button" type="button" onClick={e=>{window.location.href="./all-products"}}>Ver Catalogo <i className="fa fa-long-arrow-right ml-2"></i></button>
                    </div>
                    
                </div>
            </div>
        </div>
       
    
  </>;
};

export default header;
