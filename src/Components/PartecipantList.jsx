import trips from "../db/trips.js";

import SinglePartecipant from "./SinglePartecipant.jsx";

export default function Partecipantlist({ tripId }) {
  const trip = trips.find((trip) => trip.id === Number(tripId));

  return (
    <section>
      <h5 className="mb-3 fw-bold">
        <i class="bi bi-people-fill"></i> Partecipanti:
      </h5>

      <div className="mb-2">
        <input className="form-control" type="search" name="partecipantFilter" id="partecipantFilter" placeholder="Filtra..." />
      </div>

      <div className="accordion" id="accordionExample">
        {trip.partecipants.map((partecipantID) => {
          return (
            <SinglePartecipant
              key={`partecipant-${partecipantID}`}
              id={partecipantID}
            />
          );
        })}
      </div>
    </section>
  );
}
