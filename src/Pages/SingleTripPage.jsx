import { useParams } from "react-router-dom";

import trips from "../db/trips.js";

import PartecipantList from "../Components/PartecipantList.jsx";

export default function SingleTripPage() {

  const { tripId } = useParams();

  const trip = trips.find(trip => trip.id === parseInt(tripId));

  return (

    <div className="container my-5">

      <div className="row justify-content-center">

        <div className="col-12 col-md-10 col-lg-8">

          <div className="card p-4 rounded shadow">

            <h1 className="mb-4 text-center">{trip.title}</h1>

            <img src={`/${trip.img}`} alt={trip.title} className="img-fluid mx-auto mb-4 h-100" />

            <p className="fs-5">
              
              <strong>Descrizione: </strong>{trip.description}
              
            </p>

            <p className="fs-5">

              <strong>Inizio: </strong>{trip.start_date}

            </p>

            <p className="fs-5">

              <strong>Fine: </strong>{trip.end_date}

            </p>

            <PartecipantList tripId={tripId} />

          </div>

        </div>

      </div>

    </div>

  );

}