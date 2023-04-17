import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../components/Home";
import Header from "../layouts/Header";
import Restaurant from "../components/Restaurant";
import AddRestaurant from "../components/AddRestaurant";

export default function AppRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="restaurant/:id" element={<Restaurant />} />
        <Route path="addRestaurant" element={<AddRestaurant/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
