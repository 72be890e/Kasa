import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link className="return-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
