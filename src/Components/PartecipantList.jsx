import { useState } from "react";
import trips from "../db/trips.js";
import SinglePartecipant from "./SinglePartecipant.jsx";

export default function PartecipantList({ tripId }) {
  const [filter, setFilter] = useState("");

  const trip = trips.find((trip) => trip.id === Number(tripId));

  return (
    <section>
      <h5 className="mb-3 fw-bold">
        <i className="bi bi-people-fill"></i> Partecipanti:
      </h5>

      <div className="mb-2">
        <input
          className="form-control px-3 py-2"
          type="search"
          placeholder="Filtra..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="accordion" id="accordionExample">
        {trip.partecipants.map((id) => (
          <SinglePartecipant key={id} id={id} filter={filter} />
        ))}
      </div>
    </section>
  );
}


