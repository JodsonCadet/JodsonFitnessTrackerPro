import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { data, useNavigate } from "react-router"; 

/** Shows a list of activities. */
export default function ActivityList() {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "activities");

  const navigate = useNavigate();

  if (loading || !activities) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  // const loadActivitiesDetails = (e) => {
  //   const activityId = e.target.closest("li").dataset.id;
  //   // Load activity details...
  // };
  // Using the navigate function to load activity details. Still working it!!!
const loadActivitiesDetails = ({activity}) => {
  navigate(`/activities/${activity.id}`);
}
  return (
    <ul onClick={loadActivitiesDetails}>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}

/** Shows a single activity. Logged-in users will also see a delete button. */
function ActivityListItem({ activity }) {
  const { token } = useAuth();
  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", "/activities/" + activity.id, ["activities"]);

  return (
    <li>
      <p>{activity.name}</p>
      {token && (
        <button onClick={() => deleteActivity()}>
          {loading ? "Deleting" : error ? error : "Delete"}
        </button>
      )}
    </li>
  );
}
