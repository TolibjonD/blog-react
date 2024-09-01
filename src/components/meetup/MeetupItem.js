import React, { useContext } from 'react'
import styles from "./MeetupItem.module.css";
import Card from '../ui/Card';
import FavouritesContext from '../../store/favourites.context';

const MeetupItem = (props) => {
  const favouritesCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

  function togglefavouriteStatusHandler() {
    if(itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id)
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        desc: props.desc
      });
    }
  };
  return (
    <li className={styles.item}>
        <Card>
        <div className={styles.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
            <h3>{props.title}</h3>
            <address> {props.address} </address>
            <p style={{color: '#888', marginTop: '20px'}}> {props.desc} </p>
        </div>
        <div className={styles.actions}>
            <button onClick={togglefavouriteStatusHandler}>
              {itemIsFavourite ? 'Remov from Favourites' : 'To Favourites'}
            </button>
        </div>
        </Card>
    </li>
  )
}

export default MeetupItem