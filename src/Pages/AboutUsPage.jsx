export default function AboutUsPage() {
  const teams = [
    {
      id: 1,
      title: "Boo...Team",
      text: "Siamo un giovane team di sviluppatori web, motivati dalla voglia di innovare e creare soluzioni digitali su misura. Lavoriamo con entusiasmo e competenze aggiornate per realizzare siti e applicazioni moderni, veloci e user-friendly. Crediamo nella collaborazione e nell’ascolto delle esigenze dei clienti, trasformando le idee in progetti concreti e funzionali. Ogni riga di codice per noi è un’opportunità per crescere e offrire il meglio, unendo design accattivante e tecnologia solida. Il nostro obiettivo è costruire esperienze digitali che semplifichino la vita e rendano ogni progetto un successo condiviso.",
      crew: ["Marzia", "Asia", "Tommaso", "Simone"],
      img: "../teamBoo.jpg",
    },
    {
      id: 2,
      title: "Road..team",
      text: "Siamo un team di organizzatori di viaggi appassionati e professionali. Amiamo trasformare ogni avventura in un’esperienza indimenticabile, curando ogni dettaglio con entusiasmo e precisione. Dalla pianificazione alla realizzazione, ci occupiamo di itinerari personalizzati, attività coinvolgenti e sistemazioni confortevoli, garantendo sicurezza e divertimento. La nostra missione è rendere ogni viaggio semplice, piacevole e memorabile, offrendo supporto costante e consigli esperti. Con noi, ogni destinazione diventa un’opportunità per scoprire, imparare e divertirsi, creando ricordi preziosi da condividere. Viaggiando insieme, trasformiamo sogni e idee in esperienze concrete, con passione, professionalità e un sorriso sempre pronto ad accoglierti.",
      crew: ["Luca", "Sara", "Davide", "Elena"],
      img: "../teamRoad.jpg",
    },
  ];

  return (
    <>
      <h1 className="text-center m-3">Chi siamo</h1>

      <div className="container">
        <div className="row">
          {teams.map(({ id, title, text, crew, img }) => (
            <div key={`team-${id}`} className="col-12 col-lg-6 mb-4">
              <div className="p-3 border rounded h-100">
                <div className="img-team mb-3">
                  <img src={img} alt={title} className="img-fluid" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul className="px-0">
                  {crew.map((member, index) => (
                    <li key={index} className="list-unstyled">
                      <i className="bi bi-person-square"></i> {member}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
