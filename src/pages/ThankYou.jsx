import { useNavigate, useLocation } from "react-router-dom";

export function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  function dismiss() {
    navigate("/");
  }

  return (
    <main className="flex flex-col min-h-screen justify-between bg-[hsl(var(--white))] gap-6 px-8 pt-32 pb-8 sm:rounded-2xl sm:max-w-md sm:gap-8 sm:p-12 sm:min-h-fit">
      <div className="flex flex-col gap-6">
        <img src="../assets/images/icon-success.svg" alt="" className="w-12" />
        <h1 className="text-4xl font-bold">
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to <span className="font-bold">{email}</span>. Please open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <button className="btn-primary" type="button" onClick={dismiss}>
        <span>Dismiss message</span>
      </button>
    </main>
  );
}
