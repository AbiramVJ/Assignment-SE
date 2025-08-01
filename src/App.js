import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Router/AppRoutes";

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
