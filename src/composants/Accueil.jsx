import './Accueil.scss';
import firebase from 'firebase/app';
import {instanceFirebaseUI} from '../firebase';
import 'firebaseui/dist/firebaseui.css'
import {useEffect} from 'react';

export default function Accueil(props) {

  useEffect(
    () => instanceFirebaseUI.start("#firebaseui-widget", {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    })
    , []);

    return (
      <div className="Accueil">
          <h3 className="logo">Signets <span>beta</span> </h3>
          <h2 className="amorce">Organiser vos signet Web, <br />Simple comme bonjour!</h2>
          <h4 className="etiquette">Connexion a Signets</h4>
          <div className="firebase-widget"></div>
      </div>
    );
  }