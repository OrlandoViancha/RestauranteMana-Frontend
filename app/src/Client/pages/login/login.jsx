import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.getElementById("image-header").style.display = "none";
  }, []);

  const logged = () => {
    Axios.post("http://localhost:3001/login", {
      name_user: username,
      password: password,
    }).then((response) => {
        if(response.data.result){
            window.location.href="./home"
        }
        else{
            alert("ERROR USUARIO NO EXISTENTE");
        }
    });
  };

  return (
    <>
      <section class="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{ borderRadius: "1rem" }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      class="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i
                            class="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span class="h1 fw-bold mb-0">
                            <img src="https://www.elmana.co/wp-content/uploads/2020/09/Logo_web.png" />
                          </span>
                        </div>

                        <h5
                          class="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="username"
                            class="form-control form-control-sm"
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                            placeholder="Username"
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            class="form-control form-control-sm"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            placeholder="Password"
                          />
                        </div>

                        <div class="pt-1 mb-4">
                          <button
                            onClick={logged}
                            class="btn btn-dark btn-lg btn-block"
                            type="button"
                            style={{ width: "100%" }}
                          >
                            Login
                          </button>
                        </div>

                        <a class="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <a href="./registrer" style={{ color: "#393f81" }}>
                            Register here
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
