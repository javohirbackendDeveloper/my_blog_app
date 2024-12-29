// import { createRoot } from "react-dom/client";
// import React from "react";
// import App from "./App.jsx";
// import { AuthContextProvider } from "./context/authContext.jsx";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <App />
//     </AuthContextProvider>
//   </React.StrictMode>
// );

import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
