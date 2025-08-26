import { Link } from "react-router-dom";

import jumbotronImage from '../assets/jumbotron.jpg'

export default function Jumbotron() {

  return (

    <div className="container my-5">

      <section className="py-5">

        <h1 className="display-6 fw-bold">Ogni strada è un’avventura. Scoprila con Booroad!</h1>

        <div className="py-3">

          <img className="img-fluid float-start me-3" width="650" src={jumbotronImage} alt="Jumbotron image" />

          <p className="fs-5 mb-5">
            Booroad è molto più di un semplice sito di viaggi: è il punto di partenza per chi sogna di esplorare il mondo con occhi curiosi e spirito d’avventura.
            
            <br />

            Che tu stia cercando mete fuori dai soliti circuiti turistici, esperienze autentiche a contatto con la cultura locale o itinerari su misura per viaggiatori indipendenti, Booroad ti accompagna passo dopo passo nella creazione del tuo viaggio ideale.
            
            <br />

            Preparati a scoprire luoghi sorprendenti, storie da vivere e percorsi che lasciano il segno: ogni viaggio con Booroad inizia con l’ispirazione e si trasforma in un’avventura indimenticabile.
            
            <br />

            <Link to="tripslist">

              <button className="btn btn-primary btn-lg my-3" type="button">Inizia a viaggiare!</button>

            </Link>

          </p>

        </div>

      </section>

    </div>

  );

}