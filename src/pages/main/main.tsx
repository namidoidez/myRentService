import React from "react";
import { JSX } from "react";
import Header from "../../components/header/header";
import OfferCardList from "../../components/offer-card-list/offer-card-list";
import OffersMap from "../../components/offers-map/offers-map";
import CityList from "../../components/city-list/city-list";
import SortOptions from "../../components/sort-options/sort-options";
import { useAppSelector } from "../../hooks";
import { OfferItem } from "../../types/offer";
import { groupOffersByCity, sortOffers } from "../../utils";
import { SortOffer } from "../../types/sort";
import { SortOffersType } from "../../const";

type MainProps = {
  offerList: OfferItem[];
};

function Main({ offerList }: MainProps): JSX.Element {
  const [activeSort, setActiveSort] = React.useState<SortOffer>("POPULAR");

  const selectedCity = useAppSelector((state) => state.city);
  const groupedOffers = groupOffersByCity(offerList);
  const currentOffers = React.useMemo(
    () => sortOffers(groupedOffers[selectedCity.name]?.offerList, SortOffersType[activeSort]),
    [groupedOffers, selectedCity]
  );
  const [selectedOffer, setSelectedOffer] = React.useState<OfferItem | undefined>(undefined); // hoveredOffer

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
          <CityList selectedCity={selectedCity}/>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            {currentOffers ? (
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {currentOffers.length} places to stay in {selectedCity.name}
                  </b>
                  <SortOptions activeSorting={activeSort} onChange={(newSorting) => setActiveSort(newSorting)} />
                  <div className="cities__places-list places__list tabs__content">
                    <OfferCardList
                      offerList={currentOffers}
                      onHover={handleSelectOffer}
                    />
                  </div>
                </section>
                
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <OffersMap
                      city={selectedCity}
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