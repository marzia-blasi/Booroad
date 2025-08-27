import AddPartecipant from "./AddPartecipant";

export default function AddTrip() {
  return (
    <>
      <h3 className="mb-4">Aggiungi nuovo viaggio</h3>
      <form className="card bg-light p-3">
        <div className="mb-3">
          <label htmlFor="place" className="form-label">
            Viaggio a:
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
            Descrizione luogo:
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
            Inizio viaggio:
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
            Fine viaggio:
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
            Immagine:
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
            Aggiungi partecipanti:
          </label>
          <button className="btn btn-primary d-block">
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
        <AddPartecipant />

        <button type="submit" className="btn btn-primary w-25 mx-auto">
          Salva
        </button>
      </form>
    </>
  );
}
