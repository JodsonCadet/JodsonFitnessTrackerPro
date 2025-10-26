// import useQuery from "../api/useQuery";
// import useMutation from "../api/useMutation";
// import { useParams } from "react-router";
// import { useAuth } from "../auth/AuthContext";

// export default function ActivityDescription() {
//   const { token } = useAuth();
//   const { id } = useParams();
//   const { data, error, loading } = useQuery(`/activities/${id}`, "activity");
//   const { mutate, loading: delLoading, error:delError } = useMutation("DELETE", `/activities/${id}`, ["activity"])

//   if (loading || delLoading) return <h1>Loading...</h1>;
//   if (error || delError) return <p>{error}{delError}</p>;
//   if (data) {
//     return (
//       <div>
//         <h1>{data.name}</h1>
//         <p>{data.description}</p>
//         <p>Creator Name: {data.creatorName}</p>
//         {token ? (<button onClick={() => (
//             mutate()
//         )}>Delete</button>) : (<></>)}
//       </div>
//     );
//   }
// }