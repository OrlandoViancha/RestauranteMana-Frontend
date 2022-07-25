import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Dashboard from "../products";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/product").then((response) => {
      setProducts(response.data.products);
    });
    console.log(products);
  }, []);
  return (
    <Dashboard>
      <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        ADD +
      </button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((value, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{value.name}</td>
                <td>{value.price}</td>
                <td>{value.description}</td>
                <td>
                    <button class="btn btn-primary">Eliminar</button>
                  <button class="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Products;
