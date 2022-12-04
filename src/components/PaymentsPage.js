import { useNavigate } from "react-router-dom";

function PaymentsPage() {
  const navigate = useNavigate();
  return (
    <>
      <div>Payment page</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}
export default PaymentsPage;
