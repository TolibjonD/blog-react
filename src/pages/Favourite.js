import React, { useContext } from 'react'
import FavouritesContext from '../store/favourites.context'
import MeetupList from '../components/meetup/MeetupList';
import { Link } from 'react-router-dom';

const Favourite = () => {
  const favouritesCtx = useContext(FavouritesContext);

  let content;

  if(favouritesCtx.total === 0) {
    content = <p>You got no favourites yet. Start adding some ?. <Link to={'/'}>All meetups</Link> </p>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  )
}

export default Favourite