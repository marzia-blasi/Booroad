import compassImage from '../assets/compass.jpg'

export default function Error404() {

    return (

        <section className="text-center">

            <h1 className="mt-5">Pagina non trovata</h1>

            <img className="my-5" src={compassImage} alt="Compass image" />

        </section>

    );

}