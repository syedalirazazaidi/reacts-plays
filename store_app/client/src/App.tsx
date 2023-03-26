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
import { ProductProvider } from "./context/DataContext";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Products />} loader={getProducts} />
      <Route path="testing" element={<Testing />} />
    </Route>
  )
);

function App() {
  return (
    <ProductProvider>
      <RouterProvider router={router} />;
    </ProductProvider>
  );
}

export default App;
