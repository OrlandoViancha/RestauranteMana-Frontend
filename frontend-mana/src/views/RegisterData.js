import React from 'react'
import css from '../views/RegisterData.css'
export const RegisterData = () => {
  return (
    <div class="container" id="advanced-search-form">
        <h2 style={{textAlign:'center'}}> <b>Creación de Cuenta EL MANA.</b></h2>
        <form>
            <div class="form-group">
                <label for="first-name">First name</label>
                <input type="text" class="form-control" placeholder="First name" id="first-name"></input>
            </div>
            <div class="form-group">
                <label for="last-name">Last name</label>
                <input type="text" class="form-control" placeholder="Last name" id="last-name"></input>
            </div>
            <div class="form-group">
                <label for="country">Country</label>
                <input type="text" class="form-control" placeholder="Country" id="country"></input>
            </div>
            <div class="form-group">
                <label for="number">Phone number</label>
                <input type="text" class="form-control" placeholder="Phone number" id="number"></input>
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="text" class="form-control" placeholder="Age" id="age"></input>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="Email" id="email"></input>
            </div>
            <div class="form-group">
                <label for="category">Category</label>
                <input type="text" class="form-control" placeholder="Category" id="category"></input>
            </div>
            <div class="form-group">
                <label for="education">Education</label>
                <input type="text" class="form-control" placeholder="Education" id="education"></input>
            </div>
            <div class="clearfix"></div>
            <button type="submit" class="btn btn-primary btn-lg btn-responsive" id="search"> <span class="glyphicon glyphicon-search"></span> Crear Cuenta</button>
            <div class="mt-4 text-center">
				<a href="/login">Click para Iniciar Sesión</a>
			</div>
        </form>
    </div>
  )
}
