import { Link } from "react-router";
import travels from "../db/travels";

export default function TripsList() {
  return (
    <>
      <div className="container my-5">
        <h2 className="text-uppercase mb-3">i nostri viaggi:</h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {travels.map((item) => (
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
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
