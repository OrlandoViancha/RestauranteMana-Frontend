import React from "react";
import {AddProduct} from "../../components/shopping_Cart/shopping_Cart";

const Product = (props) => {
  var route = "http://localhost:3001/" + props.file_img;
  var cart=[]

  const AddProductToCart=(id,name,prize,route)=>{

      
        AddProduct(id,name,prize,route)

  }



  

  return (
    <>
      <div key={props.id}className="container col-md-4 col-sm-12 list-products__content-card">
        <div className="card-content">
          <div className="  col-md-4 col-sm-12 list-products__content-card-img">
            <img src={route}></img>
          </div>
          <div className="col-md-4 col-sm-12 list-products__content-card-info">
            <b className="list-products__content-card_info-title">{props.name}</b>
            <p className="list-products__content-card_info-prize">${props.price}</p>
            <button
              className=" btn btn-primary list-products__content-card_info-button"
              type="button"
              onClick={e=>AddProductToCart(props.id,props.name,props.price,route)}
            >
              AGREGAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
