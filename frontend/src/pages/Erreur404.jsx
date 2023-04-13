import { useRouteError } from "react-router-dom";
import textError from "../assets/404.svg"
import AppHeader from "../components/Header";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div >
        <AppHeader></AppHeader>
        <div id="error-page">
        <h1 id="errorNumber">404</h1>
          <p id="errorTxt">Oups! La page que vous demandez n'existe pas.</p>
          <a href="/">
            <p id="homeBack">Retourner sur la page d'accueil</p>
            </a>
        </div>

      </div>
    );
  }