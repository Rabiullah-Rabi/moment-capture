import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes/Routes";
import { Helmet } from "react-helmet";

export const Title = ({ title }) => {
  return (
    <Helmet>
      <title>MCP - {title}</title>
    </Helmet>
  );
};

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
