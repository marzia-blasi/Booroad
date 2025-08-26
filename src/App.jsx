import { BrowserRouter, Routes, Route } from "react-router";

import DefaultLayout from "./Layouts/DefaultLayout";

import HomePage from "./Pages/HomePage";
import Error404 from "./Pages/Error404";
import TripsList from "./Pages/TripsList";
import SinglePartecipant from "./Pages/SinglePartecipant";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />

          <Route path="/tripslist" element={<TripsList />} />
          <Route path="/Contatto" element={<SinglePartecipant />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
