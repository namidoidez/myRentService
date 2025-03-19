import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import { FullOffer, OfferCity, OfferItem } from "../../types/offer";
import { parseRating } from "../../utils";
import { AppRoute, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from "../../const";

type OffersMapProps = {
  city: OfferCity;
  offerList: OfferItem[];
  selectedOffer?: OfferItem | FullOffer;
};

function OffersMap({ city, offerList, selectedOffer }: OffersMapProps) {
  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return (
    <section className="map" style={{ width: "100%", height: "100%" }}>
      <MapContainer
        key={city.name}
        center={[city.location.latitude, city.location.longitude]}
        zoom={city.location.zoom}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {offerList.map((offer) => (
          <Marker
            position={[offer.location.latitude, offer.location.longitude]}
            key={offer.id}
            icon={
              offer.id === selectedOffer?.id
                ? currentCustomIcon
                : defaultCustomIcon
            }
          >
            <Popup>
              <div className="place-card__info">
                <Link to={`${AppRoute.OFFER}/${offer.id}`}>
                  <h6 className="place-card__name">{offer.title}</h6>
                </Link>
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">
                      &euro;{offer.price}
                    </b>
                    <span className="place-card__price-text">
                      &#47;&nbsp;night
                    </span>
                  </div>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: parseRating(offer.rating) }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}

export default OffersMap;