import { useHistory } from "react-router-dom";
import { useFollowUserMutation, useUnfollowUserMutation } from "store/api/profile";
import { useTypedSelector } from "store/store";

interface FollowButtonProps {
  username: string;
  following: boolean;
}

export default function FollowButton(props: FollowButtonProps) {
  const { username, following } = props;
  const history = useHistory();
  const isAuthenticated = useTypedSelector(state => state.auth.isAuthenticated);
  const [handleFollow] = useFollowUserMutation();
  const [handleUnfollow] = useUnfollowUserMutation();

  const handleClick = () => {
    if (!isAuthenticated) {
      history.push("/login");
      return;
    }
    if (following) {
      handleUnfollow(username);
    } else {
      handleFollow(username);
    }
  };

  return (
    <button
      className={`btn btn-sm ${following ? "btn-outline-primary" : "btn-outline-secondary"}`}
      onClick={handleClick}
      style={following ? { backgroundColor: "#5cb85c", color: "white" } : {}}
    >
      <i className="ion-plus-round" />
      &nbsp; {following ? "Following" : "Follow"} {username}
    </button>
  );
}
