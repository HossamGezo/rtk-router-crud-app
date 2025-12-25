// - - - - - - - - - - Libraries
// *** React
import {createRoot} from "react-dom/client";

// - - - - - - - - - - Components
// *** AppRouter Component
import AppRouter from "./routes/AppRouter";

// - - - - - - - - - - Styles
// *** index Style
import "./index.css";

// - - - - - - - - - - Main (Root Component)
createRoot(document.getElementById("root")!).render(<AppRouter />);
