import { Badge } from '@mui/material';
import './BtnAjoutPanier.scss';
export default function BtnAjoutPanier(props) { 
    return(
        <Badge badge badgeContent={props.qte} color="primary">
        <button onClick={props.onClick} className="BtnAjoutPanier">Ajouter au panier</button>
        </Badge>
    );

}