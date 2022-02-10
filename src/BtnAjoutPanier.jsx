import { Badge } from '@mui/material';
import './BtnAjoutPanier.scss';
export default function BtnAjoutPanier() { 
    return(
        <Badge badge badgeContent="2" color="primary">
        <button className="BtnAjoutPanier">Ajouter au panier</button>
        </Badge>
    );

}