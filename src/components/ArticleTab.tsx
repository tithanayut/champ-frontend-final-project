import { useTypedSelector } from "store/store";
import { FeedType } from "types/feed";

interface ArticleTabProps {
  feedType: FeedType;
  setFeedType: (feedType: FeedType) => void;
}

export default function ArticleTab(props: ArticleTabProps) {
  const { feedType, setFeedType } = props;
  const isAuthenticated = useTypedSelector(state => state.auth.isAuthenticated);

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {isAuthenticated && (
          <li className="nav-item">
            <a
              className={`nav-link ${feedType === FeedType.Personal && "active"}`}
              onClick={() => setFeedType(FeedType.Personal)}
            >
              Your Feed
            </a>
          </li>
        )}
        <li className="nav-item">
          <a
            className={`nav-link ${feedType === FeedType.Global && "active"}`}
            onClick={() => setFeedType(FeedType.Global)}
          >
            Global Feed
          </a>
        </li>
      </ul>
    </div>
  );
}
