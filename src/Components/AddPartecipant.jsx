export default function AddPartecipant() {

  return (

    <div className="my-3 p-3 bg-body-tertiary rounded-1 border border-1">

      <div className="mb-3">
        <div className="row g-1">
          <div className="col-12 col-lg">
            <label htmlFor="first_name" className="form-label small text-dark">
              <strong>Nome</strong>
            </label>
            <input
              type="text"
              className="form-control px-3 py-2"
              id="first_name"
              placeholder="Inserisci il nome"
            />
          </div>

          <div className="col-12 col-lg">
            <label htmlFor="last_name" className="form-label small text-dark">
              <strong>Cognome</strong>
            </label>
            <input
              type="text"
              className="form-control px-3 py-2"
              id="last_name"
              placeholder="Inserisci il cognome"
            />
          </div>

          <div className="col-12 col-lg">
            <label htmlFor="email" className="form-label small text-dark">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              className="form-control px-3 py-2"
              id="email"
              placeholder="Inserisci l'email"
            />
          </div>

          <div className="col-12 col-lg">
            <label htmlFor="phone" className="form-label small text-dark">
              <strong>Numero di cellulare</strong>
            </label>
            <input
              type="tel"
              className="form-control px-3 py-2"
              id="phone"
              placeholder="Inserisci il cellulare"
            />
          </div>

          <div className="col-12 col-lg">
            <label
              htmlFor="codice_fiscale"
              className="form-label small text-dark"
            >
              <strong>Codice Fiscale</strong>
            </label>
            <input
              type="text"
              className="form-control px-3 py-2"
              id="codice_fiscale"
              placeholder="Inserisci il codice fiscale"
            />
          </div>
        </div>

      </div>
    </div>

  );

}