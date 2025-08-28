import { useState } from "react";
import trips from "../db/trips.js";
import partecipants from "../db/partecipants.js";
import SinglePartecipant from "./SinglePartecipant.jsx";

export default function PartecipantList({ tripId }) {
  const [filter, setFilter] = useState("");

  const trip = trips.find((trip) => trip.id === Number(tripId));

  // filtro
  const filteredPartecipants = trip.partecipants.filter((id) => {
    const partecipant = partecipants.find((p) => p.id === id);
    if (!partecipant) return false;
    const fullName = `${partecipant.first_name} ${partecipant.last_name}`.toLowerCase();
    return fullName.includes(filter.toLowerCase());
  });

  return (
    <section>
      <h5 className="mb-3 fw-bold px-2">
        <i className="bi bi-person-vcard-fill"></i> Partecipanti:
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
      {/* se non corrispondono partecipanti */}
      {filteredPartecipants.length === 0 ? (
        <p className="px-2 py-1">Nessun partecipante corrispondente</p>
      ) : (
        // se corrispondono
        <div className="accordion" id="accordionExample">
          {filteredPartecipants.map((id) => (
            <SinglePartecipant key={id} id={id} />
          ))}
        </div>
      )}
    </section>
  );
}


