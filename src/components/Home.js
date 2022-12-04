import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>Home Page Here</div>
      <button onClick={() => navigate("/payment-gateway")}>Make Payment</button>
    </>
  );
}
export default Home;
