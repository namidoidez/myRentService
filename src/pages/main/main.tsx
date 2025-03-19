import React from "react";
import { JSX } from "react";
import Header from "../../components/header/header";
import OfferCardList from "../../components/offer-card-list/offer-card-list";
import OffersMap from "../../components/offers-map/offers-map";
import { OfferCity, OfferItem } from "../../types/offer";
import { groupOffersByCity } from "../../utils";
import { AppRoute, CITIES, OfferListPlace } from "../../const";

type MainProps = {
  offerList: OfferItem[];
};

function Main({ offerList }: MainProps): JSX.Element {
  const groupedOffers = groupOffersByCity(offerList);
  const [currentCity, setCurrentCity] = React.useState<OfferCity>(
    offerList[0].city
  );
  const [selectedOffer, setSelectedOffer] = React.useState<OfferItem | undefined>(undefined);
  const currentOffers = React.useMemo(() => groupedOffers[currentCity.name]?.offerList, [groupedOffers, currentCity]);

  const handleSelectOffer = (id?: string) => {
    const offer = currentOffers.find(offer => offer.id === id);
    setSelectedOffer(offer);
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (
                <li
                  className="locations__item"
                  key={city.name}
                  onClick={() => setCurrentCity(city)}
                >
                  <a
                    className={`locations__item-link tabs__item ${
                      city.name == currentCity.name && "tabs__item--active"
                    }`}
                  >
                    <span>{city.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            {currentOffers ? (
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>

                  <b className="places__found">
                    {currentOffers.length} places to stay in {currentCity.name}
                  </b>

                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                      Popular
                      <svg
                        className="places__sorting-arrow"
                        width="7"
                        height="4"
                      >
                        <use xlinkHref="#icon-arrow-select"></use>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li
                        className="places__option places__option--active"
                        tabIndex={0}
                      >
                        Popular
                      </li>
                      <li className="places__option" tabIndex={0}>
                        Price: low to high
                      </li>
                      <li className="places__option" tabIndex={0}>
                        Price: high to low
                      </li>
                      <li className="places__option" tabIndex={0}>
                        Top rated first
                      </li>
                    </ul>
                  </form>

                  <OfferCardList
                    offerList={currentOffers}
                    onHover={handleSelectOffer}
                    place={OfferListPlace[AppRoute.MAIN]}
                  />
                </section>
                
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <OffersMap
                      city={currentCity}
                      offerList={currentOffers}
                      selectedOffer={selectedOffer}
                    ></OffersMap>
                  </section>
                </div>
              </>
            ) : (
              <>
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">
                      No places to stay available
                    </b>
                    <p className="cities__status-description">
                      We could not find any property available at the moment in
                      Dusseldorf
                    </p>
                  </div>
                </section>
                <div className="cities__right-section"></div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;