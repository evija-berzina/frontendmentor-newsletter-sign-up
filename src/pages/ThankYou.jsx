import { useNavigate, useLocation } from "react-router-dom";

export function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  function dismiss() {
    navigate("/");
  }

  return (
    <main>
      <img src="../assets/images/icon-success.svg" alt="" />
      <h1>
        Thanks for subscribing!
      </h1>
      <p>
        A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription.
      </p>
      <button onClick={dismiss}>
        Dismiss message
      </button>
    </main>
  );
}
