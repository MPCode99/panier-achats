import './ListeProduits.scss';
import Produit from './Produit';

export default function ListeProduits(props) {
  return (
    <main className="ListeProduits">
      <h2>Produits disponibles</h2>
      <section>
        <Produit nom="T-Shirt rayé noir et blanc" prix={25.99} />
        <Produit nom="Pantalon en cotton" prix="70.95" />
      </section>
    </main>
  );
}