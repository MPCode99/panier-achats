import './Entete.scss';

export default function Entete(props) {
  // Code JS du composant

  // Renvoyer le "rendu" visuel du composant
  return (
    <header className='Entete'>
      <h2>Magasin</h2>
      <nav>
        <ul>
          <li>mon compte</li>
          <li>panier</li>
        </ul>
      </nav>
    </header>
  );
}