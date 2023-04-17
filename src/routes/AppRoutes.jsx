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
import ManageRestaurant from "../components/ManageRestaurant";
import Update from "../components/Update";

export default function AppRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="restaurant/:id" element={<Restaurant />} />
        <Route path="addRestaurant" element={<AddRestaurant/>}/>
        <Route path="manageRestaurant" element={<ManageRestaurant/>}/>
        <Route path="manageRestaurant/update/:id" element={<Update/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
