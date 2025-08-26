import travels from "../db/travels";

export default function TripsList() {

  return (

    <>
      <div className="container my-5">

        <h1 className="text-uppercase mb-3">i nostri viaggi:</h1>

        <div className="row row-cols-1 row-cols-md-3 g-3">

          {
            
            travels.map(item => {

              return (

                <div key={"trip-" + item.id} className="col">

                  <div className="card p-3 h-100">

                    <h2>{item.title}</h2>

                    <img className="card-img-top" src={item.img} alt={item.title} />

                    <div className="card-body">

                      <p>{item.description}</p>

                      <div>Inizio viaggio: {item.start_date}</div>

                      <div>Fine viaggio: {item.end_date}</div>

                    </div>

                  </div>

                </div>

              );

            })

          }

        </div>

      </div>

    </>

  );

}