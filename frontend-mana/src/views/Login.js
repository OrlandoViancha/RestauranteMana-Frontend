import React from 'react'
import img from '../img/manatwo.jpg'
import css from '../views/Login.css'
import { RegisterData } from './RegisterData'
export const Login = () => {
  return (
    <body class="my-login-page">
	<section class="h-100">
		<div class="container h-100">
			<div class="row justify-content-md-center h-100">
				<div class="card-wrapper">
					<div class="brand">
						<img src={img} alt="logo"></img>
					</div>
					<div class="card fat">
						<div class="card-body">
							<h4 class="card-title"><b>INICIAR SESION</b></h4>
							<form method="POST" class="my-login-validation" novalidate="">
								<div class="form-group">
									<label for="email">Usuario :</label>
									<input id="email" type="email" class="form-control" name="email" value="" required autofocus></input>
									<div class="invalid-feedback">
										Email is invalid
									</div>
								</div>

								<div class="form-group">
									<label for="password">Contraseña :
									</label>
									<input id="password" type="password" class="form-control" name="password" required data-eye></input>
								    <div class="invalid-feedback">
								    	Password is required
							    	</div>
								</div>
                                <br></br>
								<div class="d-grid gap-2">
                                        <button class="btn btn-primary" type="button">Iniciar Sesion</button>
                                </div>
								<div class="mt-4 text-center">
									No tienes una cuenta ? <a href="/register">Click para Crear</a>
								</div>
							</form>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</section>

</body>
  )
}
