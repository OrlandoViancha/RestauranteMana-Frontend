import React from 'react';
import "./index.css"
import pizza from "../../../img/imagen-pizza.jpg"
import perro from "../../../img/imagen-perro-caliente.jpg"
import salchipapa from "../../../img/imagen-salchipapa.jpg"
import arepa_rellena from "../../../img/image-arepa-rellena.jpg"
import choripapa from "../../../img/imagen-choripapa.jpg"
import choriperro from "../../../img/imagen-choriperro.png"
import sandwich from "../../../img/imagen-sandwich.jpg"
import ScheduleRestaurant from '../../components/section-schedule/schedule_restaurant';
const Index=()=>{



    return(
        <>
        
            <div className="container-categories">
            <h1 className="container-categories__h1">MENU</h1>
            <div className="container-categories__div-product"><figure><img src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646__340.jpg"/><div className="name"><a>HAMBURGUESA</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={pizza}/><div className="name"><a >PIZZA</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={perro}/><div className="name"><a>PERRO CALIENTE</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={salchipapa}/><div className="name"><a>SALCHIPAPA</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={choripapa}/><div className="name"><a>CHORIPAPA</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={choriperro }/><div className="name"><a>CHORIPERRO</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={arepa_rellena}/><div className="name"><a>AREPA RELLENA</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={sandwich}/><div className="name"><a>SANDWICH</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src={salchipapa}/><div className="name"><a>MOROCHO</a></div></figure></div>
            </div>
            
            <section>
                <ScheduleRestaurant/>
            </section>
        </>
    )
}


export default Index;