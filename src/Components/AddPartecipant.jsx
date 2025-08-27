export default function AddPartecipant() {

  return (

    <div className="mt-1 bg-body-tertiary rounded-4">

      <div className="mb-3">
        <div className="row g-1">
          <div className="col">
            <label htmlFor="first_name" className="form-label small text-dark">
              Nome
            </label>
            <input
              type="text"
              className="form-control px-3 py-2"
              id="first_name"
              placeholder="Inserisci il nome"
            />
          </div>

          <div className="col">
            <label htmlFor="last_name" className="form-label small text-dark">
              Cognome
            </label>
            <input
              type="text"
              className="form-control px-3 py-2"
              id="last_name"
              placeholder="Inserisci il cognome"
            />
          </div>

          <div className="col">
            <label htmlFor="email" className="form-label small text-dark">
              Email
            </label>
            <input
              type="email"
              className="form-control px-3 py-2"
              id="email"
              placeholder="Inserisci l'email @"
            />
          </div>

          <div className="col">
            <label htmlFor="phone" className="form-label small text-dark">
              Cellulare
            </label>
            <input
              type="tel"
              className="form-control px-3 py-2"
              id="phone"
              placeholder="Inserisci il cellulare"
            />
          </div>

          <div className="col">
            <label
              htmlFor="codice_fiscale"
              className="form-label small text-dark"
            >
              Codice Fiscale
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