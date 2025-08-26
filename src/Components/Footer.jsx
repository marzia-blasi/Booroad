export default function Footer() {
  return (
    <footer className="py-3 border-top text-center bg-dark">
      {/* Link */}
      <div className="mb-2">
        <a href="#" className="text-decoration-none mx-2 text-light">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#" className="text-decoration-none mx-2 text-light">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="#" className="text-decoration-none mx-2 text-light">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" className="text-decoration-none mx-2 text-light">
          <i className="bi bi-google"></i>
        </a>
      </div>
      {/* Privacy */}

      <div className="mb-2">
        <a href="#" className="text-decoration-none mx-2 text-light">
          Privacy
        </a>
        <a href="#" className="text-decoration-none mx-2 text-light">
          Cookie
        </a>
        <a href="#" className="text-decoration-none mx-2 text-light">
          Termini
        </a>
      </div>
      <hr className="border-light w-75 mx-auto my-3" />
      <small className="text-light">© 2025 - Tutti i diritti riservati</small>
    </footer>
  );
}
