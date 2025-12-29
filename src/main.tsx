// - - - - - - - - - - Libraries
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";

// - - - - - - - - - - Redux Store
import store from "./app/store";

// - - - - - - - - - - Components
import AppRouter from "./routes/AppRouter";

// - - - - - - - - - - Styles
import "./index.css";

// - - - - - - - - - - Main (Root Component)
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
