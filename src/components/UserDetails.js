import { useParams } from "react-router-dom";

function UserDetails() {
  const params = useParams();
  const { userId } = params;
  return <div>Details About User {userId}</div>;
}
export default UserDetails;
