import { useEffect, useState } from "react";

import partecipants from "../db/partecipants.js";
import ContactCard from "./ContactCard.jsx";

export default function Partecipants() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              {partecipants.map((partecipant) => (
                <div className="card-body" key={partecipant.id}>
                  <h3 className="card-title">{partecipant.first_name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
