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

  if (loading || !activities) return <p>it's Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} navigate={navigate} />
      ))}
    </ul>
  );
}

/** Shows a single activity. Logged-in users will also see a delete button. */
function ActivityListItem({ activity, navigate }) {
  const { token } = useAuth();
  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", "/activities/" + activity.id, ["activities"]);

  // Using the navigate function to load activity details. Still working it!!!
  const loadActivitiesDetails = () => {
    navigate(`/activities/${activity.id}`);
  }

  return (
    <li onClick={loadActivitiesDetails}>
      <p>{activity.name}</p>
      {token && (
        <button onClick={(e) => {
          e.stopPropagation();
          deleteActivity();
        }}>
          {loading ? "Deleting" : error ? error : "Delete"}
        </button>
      )}
    </li>
  );
}