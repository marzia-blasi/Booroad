import { useParams } from "react-router-dom";
import partecipants from "../db/partecipants.js";

export default function ContactCard() {
  const { id } = useParams();
  const partecipant = partecipants.find((p) => p.id === Number(id));
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body" key={partecipant.id}>
                <h3 className="card-title">{partecipant.first_name}</h3>
                <h4 className="card-subtitle mb-2 text-body-secondary">
                  {partecipant.last_name}
                </h4>
                <p classNAme="card-text">{partecipant.tax_code}</p>
                <a href="#" class="card-link">
                  {partecipant.email}
                </a>
                <a href="#" className="card-link">
                  {partecipant.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
