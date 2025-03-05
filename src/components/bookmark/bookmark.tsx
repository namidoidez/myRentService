import { JSX } from "react";

type BookmarkProps = {
  inBookmarks: boolean;
  size: { width: number; height: number };
  place: string;
};

function Bookmark({ inBookmarks, size, place }: BookmarkProps): JSX.Element {
  return (
    <button
      className={
        `${place}-button button ` +
        (inBookmarks ? `${place}-button--active` : undefined)
      }
      type="button"
    >
      <svg className={`${place}-icon`} width={size.width} height={size.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {inBookmarks ? "In bookmarks" : "To bookmarks"}
      </span>
    </button>
  );
}

export default Bookmark;