import partecipants from '../db/partecipants.js';

export default function PartecipantsSelector() {

    return (

        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="text-center">Selezionato</th>
                        <th className="text-center">Nome</th>
                        <th className="text-center">Cognome</th>
                        <th className="text-center">Indirizzo email</th>
                        <th className="text-center">Numero di telefono</th>
                        <th className="text-center">Codice fiscale</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        partecipants.map(partecipant => {

                            return (

                                <tr key={`partecipant-${partecipant.id}`}>
                                    <td className="text-center"><input type="checkbox" className="form-check-input border-dark" id={`partecipant-${partecipant.id}-check`} name={`partecipant-${partecipant.id}-check`} /></td>
                                    <td className="text-center">{partecipant.first_name}</td>
                                    <td className="text-center">{partecipant.last_name}</td>
                                    <td className="text-center">{partecipant.email}</td>
                                    <td className="text-center">{partecipant.phone}</td>
                                    <td className="text-center">{partecipant.tax_code}</td>
                                </tr>

                            );

                        })
                    }
                </tbody>
            </table>
        </div>

    );

}