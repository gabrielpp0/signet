import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Accueil from './Accueil';
import {
  useEffect,
  useState
} from 'react';
import firebase from 'firebase/app';
import {
  insatanceFirestore
} from '../firebase';

export default function Appli() {
  const etatUtilisateur = useState(null);
  const [utilisateur, setUtilisateur] = etatUtilisateur;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      (util) => {
        setUtilisateur(util);
        if (util) {
          insatanceFirestore.collection('utilisateurs').doc(util.uid).set({
            nom: util.displayName,
            courriel: util.email,
            date: firebase.firestore.FieldValue.serverTimestamp()
          }, {merge: true});
        }
      }
    )
  }, []);
//SI UTILISATEUR CONNECTER PAGE DE SIGNET ... SINON ACCUEIL utilisation de fragment <> </> et d<op/rateur ternaire () => ? :
  return (
    <div className="Appli">
      {
        utilisateur ?
        <>
        <Entete utilisateur={utilisateur}/>
        <section className="contenu-principal">
          <ListeDossiers />
          <Fab className="ajoutRessource" color="primary" aria-label="Ajouter dossier">
            <AddIcon />
          </Fab>
        </section>
        </>
        :
        <Accueil />
      }
    </div>
  );
}
