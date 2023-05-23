import { Article } from "types/article";
import FavoriteButton from "./FavoriteButton";

interface ArticlePreviewProps {
  article: Article;
}

export default function ArticlePreview(props: ArticlePreviewProps) {
  const {
    article: {
      author: { username, image },
      slug,
      title,
      description,
      favorited,
      favoritesCount,
      createdAt,
    },
  } = props;

  const date = new Date(createdAt);

  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href={`/#/profile/${username}`}>
          <img src={image || "placeholder.png"} />
        </a>
        <div className="info">
          <a href={`/#/profile/${username}`} className="author">
            {username}
          </a>
          <span className="date">
            {!isNaN(date.getTime()) ? date.toLocaleDateString("en-US", { dateStyle: "long" }) : "Unknown"}
          </span>
        </div>
        <FavoriteButton varient="short" slug={slug} favoritesCount={favoritesCount} favorited={favorited} />
      </div>

      <a href={`/#/${slug}`} style={{ textDecoration: "none" }}>
        <h2 className="h4" style={{ fontWeight: 600, color: "#373A3C" }}>
          {title}
        </h2>
        <p className="text-muted">{description}</p>
      </a>
    </div>
  );
}
