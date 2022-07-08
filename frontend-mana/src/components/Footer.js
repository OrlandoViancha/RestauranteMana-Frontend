import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const Footer = () => {
  return (
  
        <MDBFooter color="" className="bg-light text-center text-lg-start">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="text-center text-md-left mt-3 pb-3">

            <MDBCol md="" lg="" xl="" className="mx-auto mt-3 dark-grey-text">
            <div class="container p-4 pb-0">
   
            <section class="mb-4">
            <h6 className="text-uppercase mb-4 font-weight-bold dark-grey-text">
                <b>Links EL MANA.</b>
                </h6>
                <a style={{color:'black'}} href="https://www.facebook.com/DolceDelicia21">Facebook EL MANA</a>
                <i class="fab fa-facebook-f"></i>
      
                <a style={{color:'black'}} href="https://twitter.com/?lang=es"> - Twiter EL MANA</a>
                <i class="fab fa-twitter"></i>

                <a style={{color:'black'}} href="https://www.instagram.com/dolce_delizia21/?hl=es"> - Instagram EL MANA</a>
                <i class="fab fa-instagram"></i>

            </section>
            <section class="mb-4">
                <p><b>PazdeRio - Boyaca.    Telefono: 3123158793</b></p>
                <p><b>migue78paz@gmail.com</b></p>
            </section>

            </div>

            </MDBCol>
          </MDBRow>
        <hr /> 
        </MDBContainer>

        <div className="footer-copyright text-center py-3">
            <MDBContainer fluid style={{color:'black'}}>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="/homedolcedelizia" style={{color:'black'}}> <b>ComidasRapidasElMANA.com</b> </a>
            </MDBContainer>
        </div>
    </MDBFooter>
    
  )
}
