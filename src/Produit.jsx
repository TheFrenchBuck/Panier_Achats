import './Produit.scss';
import BtnAjoutPanier from './BtnAjoutPanier';
export default function Produit({etatPanier:[panier,setPanier],nom,pid,prix}) {
    
    // console.log(props);
    // console.log('Nom du produit ', props.nom)
    // mettre le panier dans app pour permetre à produit.jsx et entete.jsx
    // de y accèder
    // let panier = {
    //     prd0002:{
    //         nom:"T-Shirt à manche",
    //         prix: 13.95,
    //         qte: 1
    //     },
    //     prd0003:{
    //         nom:"T-Shirt à manche",
    //         prix: 13.95,
    //         qte: 3
    //     }

    // }
    
    // const [panier, setPanier] = etatPanier;
    let qte = 0;
    // let panier = props.panier;
    if(panier[pid]){
        qte = panier[pid].qte;
    }
    
    
    function ajouterAuPanier(){
        if(panier[pid]){
            panier[pid].qte++;

        }
        else{
            panier[pid] = {
            prix:prix,
            qte: 1
        };
        
            
      }
       //let clonePanier = setPanier(JSON.parse(JSON.stringify(panier)));
       //let clonePanier = Object.assig({},panier);
      //setPanier(clonePanier);
      setPanier({...panier});

    }
    return (
        <article className="Produit">
            <img src={"images-produits/" + pid + ".webp"} alt={nom} />
            <div className="info">
            <div className="titre">{nom}</div> 
            <div className="prix">{prix}</div>
            
            
            <BtnAjoutPanier qte = {qte} onClick={ajouterAuPanier}/>
            </div>
        </article>
    );
}