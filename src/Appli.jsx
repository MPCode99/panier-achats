import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedPage from './PiedPage';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <ListeProduits />
        <PiedPage />
    </div>
  );
}