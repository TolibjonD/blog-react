import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    total: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {}
});

export const FavouritesContextProvider = (props) => {
    const [userFavourites, setuserFavourites] = useState([]);

    function addFavouriteHandler(favouriteMeetup) {
        setuserFavourites((prev) => prev.concat(favouriteMeetup));
    };
    function removeFavouriteHandler(meetupId) {
        setuserFavourites(prev => prev.filter(c => c.id !== meetupId));
    };
    function itemIsFavouriteHandler(meetupId) {
        return userFavourites.some(c => c.id === meetupId);
    };

    const context = {
        favourites: userFavourites,
        total: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;