import partecipants from "../db/partecipants.js";

export default function Partecipants() {
  return (
    <div className="text-center mt-4">
      <h4 className="mb-4">Partecipanti al viaggio:</h4>
      <ul className="list-unstyled text-center">
        {partecipants.map((partecipant) => (
          <li key={partecipant.id} className="fs-5 mb-2">
            {partecipant.first_name} {partecipant.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
