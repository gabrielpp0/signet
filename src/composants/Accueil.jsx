import './Accueil.scss';
import firebase from 'firebase/app';
import {instanceFirebaseUI} from '../firebase';

export default function Accueil(props) {
    return (
      <div className="Accueil">
          <h3 className="logo">Signets <span>beta</span> </h3>
          <h2 className="amorce">Organiser vos signet Web, <br />Simple comme bonjour!</h2>
          <h4 className="etiquette">Connexion a Signets</h4>
          <div className="firebase-widget"></div>
      </div>
    );
  }