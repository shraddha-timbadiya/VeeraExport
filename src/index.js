import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontext";
import { FilterContextProvider } from "./context/Filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

// const domain = process.env.REACT_APP_AUTH_DOMAIN
// const id = process.env.REACT_APP_CLIENT_ID
root.render(
<AppProvider> 
<FilterContextProvider>
<CartProvider>
<Auth0Provider
    domain="dev-dln2bsewgtx528fj.us.auth0.com"
    clientId="aEt1q3OVasuuIf6hecCN6aufkY3StYP5"
    // domain={domain}
    // clientId={id}
    redirectUri={window.location.origin}
  >
<App />
</Auth0Provider>
</CartProvider>
</FilterContextProvider>
</AppProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
