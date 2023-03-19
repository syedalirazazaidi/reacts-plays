import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayoout";
import Products from "./pages/Products";
import Testing from "./pages/Testing";
// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Products />} />
      <Route path="testing" element={<Testing />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
