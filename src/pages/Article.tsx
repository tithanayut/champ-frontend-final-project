import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useGetArticleQuery } from "store/api/article";
import FavoriteButton from "components/FavoriteButton";
import FollowButton from "components/FollowButton";

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading, isError } = useGetArticleQuery(slug);

  if (isError) return <div>Something went wrong.</div>;
  if (isLoading || !data) return null;

  const {
    article: {
      title,
      favoritesCount,
      favorited,
      body,
      createdAt,
      author: { username, image, following },
    },
  } = data;

  const date = new Date(createdAt);

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{title}</h1>

          <div className="article-meta">
            <Link to={`/profile/${username}`}>
              <img src={image || "/placeholder.png"} />
            </Link>
            <div className="info">
              <Link to={`/profile/${username}`} className="author">
                {username}
              </Link>
              <span className="date">
                {!isNaN(date.getTime()) ? date.toLocaleDateString("en-US", { dateStyle: "long" }) : "Unknown"}
              </span>
            </div>
            <FollowButton username={username} following={following} />
            &nbsp;&nbsp;
            <FavoriteButton slug={slug} favoritesCount={favoritesCount} favorited={favorited} />
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <ReactMarkdown>{body}</ReactMarkdown>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <Link to={`/profile/${username}`}>
              <img src={image || "/placeholder.png"} />
            </Link>
            <div className="info">
              <Link to={`/profile/${username}`} className="author">
                {username}
              </Link>
              <span className="date">
                {!isNaN(date.getTime()) ? date.toLocaleDateString("en-US", { dateStyle: "long" }) : "Unknown"}
              </span>
            </div>
            <FollowButton username={username} following={following} />
            &nbsp;
            <FavoriteButton slug={slug} favoritesCount={favoritesCount} favorited={favorited} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form">
              <div className="card-block">
                <textarea className="form-control" placeholder="Write a comment..." rows={3} />
              </div>
              <div className="card-footer">
                <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                <button className="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>

            <div className="card">
              <div className="card-block">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <a href="/#/profile/jacobschmidt" className="comment-author">
                  <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                </a>
                &nbsp;
                <a href="/#/profile/jacobschmidt" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <a href="/#/profile/jacobschmidt" className="comment-author">
                  <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                </a>
                &nbsp;
                <a href="/#/profile/jacobschmidt" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options">
                  <i className="ion-edit" />
                  <i className="ion-trash-a" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
