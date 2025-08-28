import { useState } from "react";

import AddPartecipant from "./AddPartecipant";
import PartecipantsSelector from "./PartecipantsSelector";

export default function AddTrip() {
  const [newTripPartecipants, setNewTripPartecipants] = useState([]);

  function handleAddPartecipantButtonClick(event) {
    event.preventDefault();
    setNewTripPartecipants([
      ...newTripPartecipants,
      <AddPartecipant key={newTripPartecipants.length} />,
    ]);
  }

  function handleAddTripFormSubmit(event) {
    event.preventDefault();
    alert("Viaggio con relativi partecipanti aggiunto con successo!");
  }

  return (
    <>
      <h3 id="add-trip" className="mb-4">
        Aggiungi nuovo viaggio
      </h3>
      <form className="card bg-light p-3">
        <div className="mb-3">
          <label htmlFor="place" className="form-label">
            <strong>Viaggio a:</strong>
          </label>
          <input
            type="text"
            className="form-control"
            name="place"
            id="place"
            aria-describedby="helpId"
            placeholder="Inserisci luogo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            <strong>Descrizione luogo:</strong>
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="description"
            aria-describedby="helpId"
            placeholder="Inserisci descrizione"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="start" className="form-label">
            <strong>Inizio viaggio:</strong>
          </label>
          <input
            type="date"
            className="form-control"
            name="start"
            id="start"
            aria-describedby="helpId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="end" className="form-label">
            <strong>Fine viaggio:</strong>
          </label>
          <input
            type="date"
            className="form-control"
            name="end"
            id="end"
            aria-describedby="helpId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            <strong>Immagine:</strong>
          </label>
          <input
            type="file"
            className="form-control"
            name=""
            id=""
            aria-describedby="helpId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="partecipants" className="form-label">
            <strong>Partecipanti:</strong>
          </label>

          <div>
            <PartecipantsSelector />
          </div>

          {newTripPartecipants}

          <button
            className="btn btn-primary d-block"
            onClick={handleAddPartecipantButtonClick}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-25 mx-auto"
          onClick={handleAddTripFormSubmit}
        >
          Aggiungi viaggio
        </button>
      </form>
    </>
  );
}
