import { useEffect, useState } from "react";

import partecipants from "../db/partecipants.js";
import ContactCard from "./ContactCard.jsx";

export default function Partecipants() {
  const selectedId = 2;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              {partecipants.map((partecipant) => (
                <div className="card-body" key={partecipant.id}>
                  <h3 className="card-title">{partecipant.first_name}</h3>
                  <ContactCard id={selectedId} />
                  <h4 class="card-subtitle mb-2 text-body-secondary">
                    {partecipant.last_name}
                  </h4>
                  <p class="card-text">{partecipant.tax_code}</p>
                  <a href="#" class="card-link">
                    {partecipant.email}
                  </a>
                  <a href="#" class="card-link">
                    {partecipant.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
