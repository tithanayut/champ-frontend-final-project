import { Link } from "react-router-dom";
import { useGetTagsQuery } from "store/api/tag";

export default function TagList() {
  const { data, isLoading, isError } = useGetTagsQuery();

  if (isError) return <div>Something went wrong.</div>;
  return (
    <div className="sidebar">
      <p>Popular Tags</p>

      {isLoading && <div>Loading...</div>}
      <div className="tag-list">
        {data &&
          data.tags.map(tag => (
            <Link to="/" key={tag} className="tag-pill tag-default">
              {tag}
            </Link>
          ))}
      </div>
    </div>
  );
}
