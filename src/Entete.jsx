import './Entete.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
export default function Entete({panier}) {
    console.log("Le panier du composant entete",panier);
    // console.log("Les props du composant entet",baba);
    // let totalQte = Object.values(panier).reduce((acc,article) => acc + article.qte, 0);
    // Calculer les 5 info importante pour obtenir le somaire du tableau 
    // (on passe les valeur du tableau dans l'objet 'panier')
    //const infoPanier = claculerInfoPanier(Object.values (panier));
    // destructurer
    const {articleDifferents,articlesTotaux,sousTotal,taxes,total} = claculerInfoPanier(Object.values (panier));
    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            
            <nav>
            <input type="checkbox" id="cc-somaire-panier"/>
            <div className="sommaire-panier">
                <h3>Sommaire Panier</h3>
                <div className="info"><span>Article different </span><span>{articleDifferents}</span></div>
                <div className="info"><span>Article totaux:</span><span>{articlesTotaux}</span></div>
                <div className="info"><span>Sous-total: </span><span>{sousTotal}</span></div>
                <div className="info"><span>Taxes: </span><span>{taxes}</span></div>
                <div className="info"><span>Totale: </span><span>{total}</span></div>
            </div>
                <a href="#">
                    <Badge badgeContent={Object.values(panier).reduce((acc,article) => acc + article.qte, 0)} color="primary">
                        <label htmlFor="cc-somaire-panier"><ShoppingCartIcon/></label>
                    </Badge>
                    
                </a>
                <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}


/** Calculer l'information du sommaire deu panier
 * @param Array panierAchats Objet panier d'achats
 * @return Objet contenant les 5 info requises du panier*/ 

function claculerInfoPanier(panierAchats){
    const sousTotal =panierAchats.reduce((acc,courant) => acc + courant.qte * courant.prix,0);
    const taxes = sousTotal * 0.14975

    return{
        articleDifferents: panierAchats.length,
        articlesTotaux: panierAchats.reduce((acc, courant) => acc + courant.qte,0),
        taxes: taxes.toFixed(2),
        sousTotal: sousTotal.toFixed(2),
        total: (sousTotal + taxes).toFixed(2)
    }
}