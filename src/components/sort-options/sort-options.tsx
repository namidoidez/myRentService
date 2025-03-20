import { useState, KeyboardEvent } from "react";
import { SortOffer } from "../../types/sort";
import { SortOffersType } from "../../const";

type SortOptionsProps = {
  activeSorting: SortOffer;
  onChange: (newSorting: SortOffer) => void;
};

function SortOptions({ activeSorting, onChange }: SortOptionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const iconStyle = {
    transform: `translateY(-50%) ${isOpen ? "rotate(180deg)" : ""}`,
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isOpen) {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  const handleClickSortingType = (type: SortOffer) => {
    onChange(type);
  };

  return (
    <form
      className="places_sorting"
      action="#"
      method="get"
      onKeyDown={handleKeyDown}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {SortOffersType[activeSorting]}
        <svg
          className="places__sorting-arrow"
          width={7}
          height={4}
          style={iconStyle}
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={"places__options"} hidden={!isOpen}>
        {Object.keys(SortOffersType).map((type) => {
          return (
            <li
              key={type}
              className={
                "places__option " +
                (type === activeSorting ? "places__option--active" : undefined)
              }
              tabIndex={0}
              onClick={() => handleClickSortingType(type as SortOffer)}
            >
              {SortOffersType[type as SortOffer]}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default SortOptions;