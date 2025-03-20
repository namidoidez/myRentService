import { JSX } from "react";
import { Link } from "react-router-dom";
import { AppRoute, CITIES } from "../../const";
import { OfferCity } from "../../types/offer";
import { changeCity } from "../../store/action";
import { useAppDispatch } from "../../hooks";

type CityListProps = {
  selectedCity?: OfferCity;
};

function CityList({ selectedCity }: CityListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li
            className="locations__item"
            key={city.name}
            onClick={() => dispatch(changeCity(city))}
          >
            <Link
              className={`locations__item-link tabs__item ${
                city.name == selectedCity?.name && "tabs__item--active"
              }`}
              to={AppRoute.MAIN}
            >
              <span>{city.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CityList;