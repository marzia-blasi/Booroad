import { useParams } from "react-router-dom";
import travels from "../db/travels";

export default function SingleTripPage() {
    const { id } = useParams();
    const trip = travels.find((t) => t.id === parseInt(id));

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="card p-4 text-center">
                        <h1 className="mb-4">{trip.title}</h1>
                        <img
                            src={`/${trip.img}`}
                            alt={trip.title}
                            className="img-fluid mx-auto mb-4 h-100"
                        />
                        <p className="fs-5">{trip.text}</p>
                        <p><strong>Data inizio:</strong> {trip.start_date}</p>
                        <p><strong>Data fine:</strong> {trip.end_date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
