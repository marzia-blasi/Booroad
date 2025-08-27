import { BrowserRouter, Routes, Route } from "react-router";

import DefaultLayout from "./Layouts/DefaultLayout";

import HomePage from "./Pages/HomePage";

import TripsList from "./Pages/TripsList";
import SingleTripPage from "./Pages/SingleTripPage";

import AboutUsPage from "./Pages/AboutUsPage";

import Error404Page from "./Pages/Error404Page";

export default function Main() {

  return (

    <BrowserRouter>

      <Routes>

        <Route element={<DefaultLayout />}>

          <Route index element={<HomePage />} />

          <Route path="/tripslist" element={<TripsList />} />
          <Route path="/tripslist/:tripId" element={<SingleTripPage />} />

          <Route path="/aboutus" element={<AboutUsPage />} />

          <Route path="*" element={<Error404Page />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}