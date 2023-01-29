import * as React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Additional } from './components/Additional/Additional';
import { Buy } from './components/Buy/Buy';
import { Products } from './components/Products/Products';

function App() {
  const routes = useRoutes(
    [
      {
        path: "/",
        element: <Home />,
      },
      { path: "about", element: <About /> },
      { path: "additional", element: <Additional /> },
      { path: "buy", element: <Buy /> },
      { path: "products", element: <Products /> },
    ]
  );

  return routes;
}

export default App;
