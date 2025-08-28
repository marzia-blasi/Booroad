import { Link } from "react-router";
import trips from "../db/trips";
import AddTrip from "../Components/AddTrip";

export default function TripsList() {
  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4 list-title">I nostri viaggi:</h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5 g-3">
          {trips.map((item) => (
            <div key={item.id} className="col">
              <Link to={`/tripslist/${item.id}`}>
                <div className="card travel-card position-relative overflow-hidden">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={item.img}
                    alt={item.title}
                  />
                  <div className="card-overlay position-absolute top-0 start-0 p-2 text-white fw-bold">
                    {item.title}
                  </div>
                  <div className="card-overlay position-absolute bottom-0 start-0 p-2 text-white text-end">
                    {item.start_date} - {item.end_date}
                  </div>
                </div>
              </Link>
            </div>
          ))}

          <div className="col">
            <a href="#add-trip">
              <div className="card travel-card d-flex justify-content-center align-items-center border-dashed">
                <span className="display-5 text-primary">
                  <i className="bi bi-plus-lg"></i>
                </span>
              </div>
            </a>
          </div>
        </div>

        <section>
          <AddTrip />
        </section>
      </div>
    </>
  );
}
