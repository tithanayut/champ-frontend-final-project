import { useHistory } from "react-router-dom";
import { useFavoriteArticleMutation, useUnfavoriteArticleMutation } from "store/api/article";
import { useTypedSelector } from "store/store";

interface FavoriteButtonProps {
  varient?: "short" | "long";
  slug: string;
  favoritesCount: number;
  favorited: boolean;
}

export default function FavoriteButton(props: FavoriteButtonProps) {
  const { varient, slug, favoritesCount, favorited } = props;
  const history = useHistory();
  const isAuthenticated = useTypedSelector(state => state.auth.isAuthenticated);
  const [handleFavorite] = useFavoriteArticleMutation();
  const [handleUnfavorite] = useUnfavoriteArticleMutation();

  const handleClick = () => {
    if (!isAuthenticated) {
      history.push("/login");
      return;
    }
    if (favorited) {
      handleUnfavorite(slug);
    } else {
      handleFavorite(slug);
    }
  };

  if (varient === "short") {
    return (
      <button
        className={`btn btn-sm pull-xs-right ${favorited ? "btn-outline-primary" : "btn-outline-secondary"}`}
        onClick={handleClick}
        style={favorited ? { backgroundColor: "#5cb85c", color: "white" } : {}}
      >
        <i className="ion-heart" /> {favoritesCount}
      </button>
    );
  }
  return (
    <button
      className={`btn btn-sm ${favorited ? "btn-outline-primary" : "btn-outline-secondary"}`}
      onClick={handleClick}
      style={favorited ? { backgroundColor: "#5cb85c", color: "white" } : {}}
    >
      <i className="ion-heart" />
      &nbsp; Favorite Post <span className="counter">({favoritesCount})</span>
    </button>
  );
}
