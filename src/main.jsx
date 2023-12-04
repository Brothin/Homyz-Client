import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-mswczro4vw8u8auo.us.auth0.com"
     clientId="vKPhY11gy1CBPUyFMLxruOVko6jA8UsI"
     authorizationParams={{
      redirect_uri: "https://homyz.vercel.app/api",
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
