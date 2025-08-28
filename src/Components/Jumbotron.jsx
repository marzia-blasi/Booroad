import { Link } from "react-router-dom";

import jumbotronImage from "../assets/jumbotron.jpg";

export default function Jumbotron() {
  return (
    <div className="container my-5">
      <section className="py-5">
        <h1 className="display-6 fw-bold">
          Ogni strada è un’avventura. Scoprila con Booroad!
        </h1>

        <div className="row row-cols-1 row-cols-lg-2 py-3 align-items-center g-3">
          <img
            className="col"
            width="650"
            src={jumbotronImage}
            alt="Jumbotron image"
          />

          <p className="col fs-5">
            Booroad è un sito di viaggi che permette di organizzare facilmente
            le proprie partenze verso destinazioni popolari, condividendo
            l’esperienza con altri viaggiatori per vivere il viaggio in
            compagnia e risparmiare sui costi.
            <Link to="tripslist">
              <button
                className="d-block mx-auto btn btn-primary btn-lg my-3"
                type="button"
              >
                Inizia a viaggiare!
              </button>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
