import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from './Layouts/DefaultLayout';
import HomePage from "./Pages/HomePage";

export default function Main() {

  return (

    <BrowserRouter>

      <Routes>

        <Route element={<DefaultLayout />}>

          <Route index element={<HomePage />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}