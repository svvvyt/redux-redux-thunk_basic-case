import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./redux/actions/customers";

import "./App.css";
import { fetchCustomers } from "./redux/actions/asyncActions/fetchCustomers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customerReducer.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt("How much?")))}>
          Add cash
        </button>
        <button onClick={() => getCash(Number(prompt("How much?")))}>
          Get cash
        </button>
        <button onClick={() => addCustomer(prompt("Name?"))}>Add client</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Get clients from db
        </button>
      </div>

      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              style={{
                fontSize: "2rem",
                border: "1px solid black",
                padding: "10px",
                marginTop: "5px",
              }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2rem", marginTop: "20px" }}>No clients</div>
      )}
    </div>
  );
}

export default App;
