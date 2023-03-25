import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { getProducts } from "./api/getProducts";
import RootLayout from "./layouts/RootLayoout";
import Products from "./pages/Products";
import Testing from "./pages/Testing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Products />} loader={getProducts} />
      <Route path="testing" element={<Testing />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
