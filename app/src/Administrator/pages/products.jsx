import React from "react";
import { useEffect } from "react";
import "./products.css";

const Products = (props) => {
  useEffect(() => {
    document.getElementById("header").style.display = "none";
    document.getElementById("footer").style.display = "none";
  });
  return (
    <>
      <div class="d-flex" id="wrapper">
        <div class="bg-white" id="sidebar-wrapper">
          <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <i class="fas fa-user-secret me-2"></i>EL MANA
          </div>
          <div class="list-group list-group-flush my-3">
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text active"
            >
              <i class="fas fa-tachometer-alt me-2"></i>Dashboard
            </a>
            <a
              href="/dashboard/products"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-project-diagram me-2"></i>Productos
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-shopping-cart me-2"></i>Reportes
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-map-marker-alt me-2"></i>Pedidos
            </a>
          </div>
        </div>

        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div class="d-flex align-items-center">
              <i
                class="fas fa-align-left primary-text fs-4 me-3 "
                id="menu-toggle" 
              ></i>
              <h2 class="fs-2 m-0">Dashboard</h2>
            </div>
            <button class="navbar-toggler"type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle second-text fw-bold" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown"aria-expanded="false" >
                            <i class="fas fa-user me-2"></i>UserName
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="/">Cerrar Sesion</a></li>
                        </ul>
                    </li>
                </ul>

            </div>
          </nav>
          <div class="container-fluid px-4">
                {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
