import { BrowserRouter, Routes, Route } from "react-router";

import DefaultLayout from './Layouts/DefaultLayout';

import HomePage from "./Pages/HomePage";
import Error404 from "./Pages/Error404";

export default function Main() {

  return (

    <BrowserRouter>

      <Routes>

        <Route element={<DefaultLayout />}>

          <Route index element={<HomePage />} />

          <Route path="*" element={<Error404 />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}