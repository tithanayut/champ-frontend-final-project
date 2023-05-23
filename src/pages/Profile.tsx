import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useGetProfileQuery } from "store/api/profile";
import { useGetArticlesByUsernameQuery } from "store/api/article";
import ArticlePreview from "components/ArticlePreview";
import FollowButton from "components/FollowButton";

export default function Profile() {
  const { username: usernameParam } = useParams<{ username: string }>();
  const { data: profileData, isLoading: isProfileLoading, isError: isProfileError } = useGetProfileQuery(usernameParam);
  const {
    data: articlesData,
    isLoading: isArticlesLoading,
    isError: isArticleError,
  } = useGetArticlesByUsernameQuery(usernameParam);

  if (isProfileError || isArticleError) return <div>Something went wrong.</div>;
  if (isProfileLoading || isArticlesLoading || !profileData || !articlesData) return null;

  const {
    profile: { username, bio, image, following },
  } = profileData;

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={image || "/placeholder.png"} className="user-img" />
              <h4>{username}</h4>
              <p>
                <ReactMarkdown>{bio}</ReactMarkdown>
              </p>
              <FollowButton username={username} following={following} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            {articlesData.articlesCount > 0 ? (
              articlesData?.articles.map(article => <ArticlePreview key={article.slug} article={article} />)
            ) : (
              <p style={{ marginTop: "1rem" }}>No articles here...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
