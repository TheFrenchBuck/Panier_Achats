import './ListeProduits.scss';
import Produit from './Produit';
import lesProduits from './data/produits.json';
// import Entete  from '';
export default function ListeProduits({etatPanier}) {
    // Exemple avec la fonction map() 
    //let notes = [59.566, 78.23, 85.258, 35.9954];
    // Pour transformer ce tableau dans un tableau qu icontient les notes arrondies à un eplace décimale : 
    // Remarquez l'utilisation des fonctions fléchées et de la méthode map()
    // let notesArrondies = notes.map(uneNote => uneNote.toFixed(1)-0);
    // console.log('Le tableau des notes arrondies : ', notesArrondies)

    // console.log('La variable lesProduits : ', lesProduits);

    // Méthode 1 (programmation impérative, avec une boucle for)
    // let composantsProduits = [];
    // // Parcourir le tableau lesProduits et générer un composant Produit pour chaque élément.
    // for (let i = 0; i < lesProduits.length; i++) {
    //     composantsProduits.push(<Produit nom={lesProduits[i].nom} prix={lesProduits[i].prix} pid={lesProduits[i].id} />);
    // }
    return (
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
                {
                    lesProduits.map(p => <Produit etatPanier={etatPanier} key={p.id} nom={p.nom} prix={p.prix} pid={p.id} />)
                }
            </div>
        </section>
    );
}