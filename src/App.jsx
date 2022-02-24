import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  
  //notifier que a react que le panier a chancger 
  

//   let panier = {
//     prd0002:{
//         prix: 13.95,
//         qte:6 
//     },
//     prd0003:{
//       prix: 120.95,
//       qte:10
//   },
//   prd0004:{
//     prix: 120.95,
//     qte:3
// }
//     le mettre de facons en bas

// };
//sans locla storage 
// const etatPanier = useState({});
//Avec locla staotage
const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {});
 
// Le premier élément est l'état
const panier = etatPanier[0];
//const setPanier = etatPanier[1];
//let compteurClic = 0 ;
//passer par un function pour que react remarque le changement d'états
//const [compteur, setCompteur ] = useState([0]); // si tableau
const [compteur, setCompteur ] = useState(0); // si pas tableau
        // <span>Nombre de clics : <i className = "compteur">{compteur[0]}</i></span>
        // <button onClick={() => {setCompteur ([compteur[0]+1]); console.log('compteur de clic :', compteur[0]);}}> Clique-moi</button>
        //persister le pamier dans localStorage
        //window.localStorage.setItem('panier-4pa',JSON.stringify(panier));
        //utiliser le hook useEffect pour executer ce code de facon controler

        useEffect(() => window.localStorage.setItem('panier-4pa',JSON.stringify(panier)),[panier,compteur]);
     

  return (
    <div className="App">
      <Entete panier = {panier}/>
      <ListeProduits etatPanier = {etatPanier}/>
      <div>
        <span>Nombre de clics : <i className = "compteur">{compteur}</i></span>
        <button onClick={() => {setCompteur (compteur+1); console.log('compteur de clic :', compteur);}}> Clique-moi</button>
        
      </div> 
      <PiedPage />
    </div>
  );
}

export default App;
