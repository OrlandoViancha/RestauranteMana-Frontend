import React,{useEffect}from "react";
import { useState } from "react";
import "./registrer.css"
import Axios from "axios";
const Registrer=()=>{

    const [first_name,setFirstName]=useState("");
    const [second_name,setSecondName]=useState("");
    const [last_name,setLastName]=useState("");
    const [cedula,setCedula]=useState("");
    const [email,setEmail]=useState("");
    const [direction,setDirection]=useState("");
   
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    useEffect(() => {
        document.getElementById("image-header").style.display = "none";
      }, []);

    const registrer=()=>{

        Axios.post("http://localhost:3001/registrer",{

            cc:cedula,
            first_name:first_name,
            second_name:second_name,
            lastname:last_name,
            direction:direction,
            email:email,
            name_user:username,
            password:password,
            type_user:1

        }).then(response=>{console.log(response.data)})


    }

    return(<><div class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
    <div class="wrapper wrapper--w960">
        <div class="card card-2">
            <div class="card-heading"></div>
            <div class="card-body">
                <h2 class="title">REGISTRO DE DATOS</h2>
                <form >
                   
                    <div class="row row-space">
                    <div class="col-2">

                    <div class="input-group">
                        <input class="input--style-2" type="text" placeholder="First Name" name="first_namename" 
                        onChange={(e)=>
                            {setFirstName(e.target.value)}}/>
                    </div> 
                    </div>
                    
                        <div class="col-2">
                            <div class="input-group">
                                <input class="input--style-2 js-datepicker" type="text" placeholder="Second Name" name="second_name" onChange={e=>setSecondName(e.target.value)}/>
                                <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                        </div>
                        <div class="col-2">
                        <div class="input-group">
                                <input class="input--style-2 js-datepicker" type="text" placeholder="Last Name" name="last_name"onChange={e=>setLastName(e.target.value)}/>
                                <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                        </div>
                        <div class="col-2">
                        <div class="input-group">
                                <input class="input--style-2 js-datepicker" type="text" placeholder="Cedula" name="cc" onChange={e=>setCedula(e.target.value)}/>
                                <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                        </div>

                        <div class="input-group">
                                <input class="input--style-2 js-datepicker" type="text" placeholder="Direccion" name="cc" onChange={e=>setDirection(e.target.value)}/>
                                <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                    </div>
                   
                    <div class="row row-space">
                        
                            <div class="input-group">
                                <input class="input--style-2" type="text" placeholder="Email" name="email" onChange={e=>setEmail(e.target.value)}/>
                            </div>
                        
                        
                    </div>

                    <h2 class="title">CREDENCIALES</h2>
                    <div class="row row-space">

                   
                            <div class="input-group">
                                <input class="input--style-2" type="text" placeholder="Username" name="username" onChange={e=>setUsername(e.target.value)}/>
                            </div>
                       

                        
                            <div class="input-group">
                                <input class="input--style-2" type="password" placeholder="Password" name="password" onChange={e=>setPassword(e.target.value)}/>
                            </div>
                        

                    </div>
                    <div class="p-t-30">
                        <button class="btn btn--radius btn--green" style={{width:'100%'}} onClick={registrer}type="button   ">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</>)
}

export default Registrer;