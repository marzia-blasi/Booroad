import trips from "../db/trips.js";

import SinglePartecipant from "./SinglePartecipant.jsx";

export default function Partecipantlist({ tripId }) {

  const trip = trips.find(trip => trip.id === Number(tripId));

  return (

    <section>

      <h5 className="mb-3 fw-bold">Partecipanti:</h5>

      <div className="accordion" id="accordionExample">

        {

          trip.partecipants.map(partecipantID => {

            return <SinglePartecipant key={`partecipant-${partecipantID}`} id={partecipantID} />;

          })

        }

      </div>

    </section>

  );

}