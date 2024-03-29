import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {lazy} from "react";
import RootLayoutPage from "@/pages/RootLayout.page";

const HomePage = lazy(() => import("./pages/Home.page"))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<RootLayoutPage/>}>
      <Route index element={<HomePage/>}/>
    </Route>
  )
);

export function Router() {
  return <RouterProvider router={router}/>;
}
