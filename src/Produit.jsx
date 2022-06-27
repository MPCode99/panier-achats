import './Produit.scss';

export default function Produit(props) {
  return (
    <article className="Produit">
      <div className="image">

      </div>
      <div className="info">
        <h3>{props.nom}</h3>
        <p className="prix">{props.prix} $CA</p>
        <button>Ajouter au panier</button>
      </div>
    </article>
  );
}