import './Appli.scss';

export default function Appli() {
  return (
    <div className="Appli">
        <header>
          <h2>Magasin</h2>
          <nav>
            <ul>
              <li>mon compte</li>
              <li>panier</li>
            </ul>
          </nav>
        </header>
        <main>
          <h2>Produits disponibles</h2>
          <ul>
            <li>
              <div className="image"></div>
              <div className="info">
                <h3>Produit 1</h3>
                <p className="prix">25.99 $CA</p>
                <button>Ajouter au panier</button>
              </div>
            </li>
            <li>
              <div className="image"></div>
              <div className="info">
                <h3>Produit 2</h3>
                <p className="prix">37.56 $CA</p>
                <button>Ajouter au panier</button>
              </div>
            </li>
          </ul>
        </main>
        <footer>
          @copy;2019-2022 Tous droits réservés
        </footer>
    </div>
  );
}