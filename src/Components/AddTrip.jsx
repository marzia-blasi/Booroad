export default function AddTrip() {
  return (
    <>
      <h3 className="mb-4">Aggiungi nuovo viaggio</h3>
      <form className="card bg-light p-3">
        <div class="mb-3">
          <label htmlFor="place" class="form-label">
            Viaggio a:
          </label>
          <input
            type="text"
            class="form-control"
            name="place"
            id="place"
            aria-describedby="helpId"
            placeholder="Inserisci luogo"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="description" class="form-label">
            Descrizione luogo:
          </label>
          <input
            type="text"
            class="form-control"
            name="description"
            id="description"
            aria-describedby="helpId"
            placeholder="Inserisci descrizione"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="start" class="form-label">
            Inizio viaggio:
          </label>
          <input
            type="date"
            class="form-control"
            name="start"
            id="start"
            aria-describedby="helpId"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="end" class="form-label">
            Fine viaggio:
          </label>
          <input
            type="date"
            class="form-control"
            name="end"
            id="end"
            aria-describedby="helpId"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="" class="form-label">
            Immagine:
          </label>
          <input
            type="file"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
          />
        </div>
      </form>
    </>
  );
}
