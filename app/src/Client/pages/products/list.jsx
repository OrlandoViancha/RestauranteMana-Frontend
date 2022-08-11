import React, { useEffect, useState } from "react";
import Axios from "axios";
import Product from "./product";
export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  CondicionalProduct(product,id){
    

    if(product.category!=id){
        return;
    }
    return(

        <Product
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  file_img={product.file_img}
         />
    )
                

  }

  render() {
    return (
      <>
       
            {this.props.products.map((product) => 
                
                this.CondicionalProduct(product,this.props.id)
                
            )}
          
            
        
      </>
    );
  }
}
