import { useState } from "react";
import { useGetArticlesQuery } from "store/api/article";
import { FeedType } from "types/feed";
import Hero from "components/Hero";
import ArticlePreview from "components/ArticlePreview";
import ArticleTab from "components/ArticleTab";
import TagList from "components/TagList";

export default function ArticleList() {
  const [feedType, setFeedType] = useState<FeedType>(FeedType.Global);
  const { data, isError, isLoading } = useGetArticlesQuery(feedType);

  return (
    <div className="home-page">
      <Hero />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <ArticleTab feedType={feedType} setFeedType={setFeedType} />
            <div>
              {isError && <p style={{ marginTop: "1rem" }}>Something went wrong.</p>}
              {isLoading && <p style={{ marginTop: "1rem" }}>Loading articles...</p>}
              {data &&
                data.articlesCount > 0 &&
                data?.articles.map(article => <ArticlePreview key={article.slug} article={article} />)}
              {!isLoading && data?.articlesCount === 0 && (
                <p style={{ marginTop: "1rem" }}>No articles are here... yet.</p>
              )}
            </div>
          </div>
          <div className="col-md-3">
            <TagList />
          </div>
        </div>
      </div>
    </div>
  );
}
