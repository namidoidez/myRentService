import { JSX } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import FavOfferCardList from "../../components/fav-offer-card-list/fav-offer-card-list";
import { OfferItem } from "../../types/offer";
import { groupOffersByCity } from "../../utils";

type FavoritesProps = {
  offerList: OfferItem[];
};

function Favorites({ offerList }: FavoritesProps): JSX.Element {
  const favOffers = offerList.filter((offer) => offer.isFavorite);
  const groupedOffers = groupOffersByCity(favOffers);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        {Object.keys(groupedOffers).length > 0 ? (
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(groupedOffers).map(([_, pair]) => {
                  return (
                    <FavOfferCardList
                      city={pair.city}
                      offersList={pair.offerList}
                    />
                  );
                })}
              </ul>
            </section>
          </div>
        ) : (
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">
                Save properties to narrow down search or plan your future trips.
              </p>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Favorites;