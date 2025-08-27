import partecipants from "../db/partecipants.js";

export default function SinglePartecipant({ id }) {

  const partecipant = partecipants.find((p) => p.id === Number(id));

  return (

        <div key={partecipant.id} className="accordion-item">

          <h2 className="accordion-header">

            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="true" aria-controls={`collapse${id}`}>

              <strong>{partecipant.first_name} {partecipant.last_name}</strong>

            </button>

          </h2>

          <div id={`collapse${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">

            <div className="accordion-body">

              <ul className="list-unstyled">

                <li className="my-3"><strong>Codice fiscale: </strong>{partecipant.tax_code}</li>

                <li className="my-3"><strong>Indirizzo email: </strong>{partecipant.email}</li>

                <li className="my-3"><strong>Numero di telefono: </strong>{partecipant.phone}</li>

              </ul>

            </div>

          </div>

        </div>

  );

}