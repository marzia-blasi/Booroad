import { Link, NavLink } from "react-router-dom";

export default function Jumbotron() {
  return (
    <>
      {/* Jumbotron */}
      <div className="jumbotron p-5 mb-4 rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Vieni a scoprire il mondo</h1>
          <p className="col-md-8 fs-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab
            modi optio autem iusto quaerat assumenda aut illo numquam
            necessitatibus possimus, explicabo corrupti! Blanditiis temporibus
            minus accusantium enim, distinctio ipsam doloribus dolorem? Quo
            consectetur accusamus in vero assumenda itaque commodi explicabo
            magni. At facilis, optio doloribus facere quidem repellat cumque
            similique culpa, hic fugit fugiat voluptatem! Unde nisi accusantium
            ullam laborum minus provident atque necessitatibus quam
            voluptatibus, similique sed pariatur aperiam veniam repellat. Earum
            quos quis est praesentium iure maiores ut similique eius, fuga illum
            quisquam! Nam, laboriosam, dolores mollitia recusandae nobis, ipsam
            blanditiis laborum ullam optio soluta nemo harum.
          </p>
          <a>
            <button className="btn btn-avocado btn-lg" type="button">
              Vieni a sperderti
            </button>
          </a>
        </div>
      </div>
      {/* end Jumbotron */}
    </>
  );
}
