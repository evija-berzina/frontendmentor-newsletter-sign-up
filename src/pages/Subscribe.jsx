import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import mobileSvg from "../../assets/images/illustration-sign-up-mobile.svg";
import tabletSvg from "../../assets/images/illustration-sign-up-tablet.svg";
import desktopSvg from "../../assets/images/illustration-sign-up-desktop.svg";
import iconSvg from "../../assets/images/icon-list.svg";

export function Subscribe() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [notValid, setNotValid] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setErrorMessage('Valid email required');
      setNotValid(true);
      return;
    }

    if (email.trim() === '') {
      setErrorMessage('Valid email required');
      setNotValid(true);
      return;
    }

    setErrorMessage('');
    setNotValid(false);
    navigate("/ThankYou", {state: {email}});
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <main className="flex flex-col bg-[hsl(var(--white))] sm:max-w-xl sm:my-8 sm:p-8 sm:rounded-2xl lg:flex-row-reverse lg:gap-8 lg:max-w-4xl">
      <picture className="flex-1 relative w-full">
        <source media="(min-width:1024px)" srcSet={desktopSvg} />
        <source media="(min-width:640px)" srcSet={tabletSvg} />
        <img src={mobileSvg} alt="Newsletter illustration" className="w-full" width={375} height={284} fetchPriority="high" />
      </picture>
      <section className="flex flex-col flex-1 gap-6 px-6 py-8 lg:justify-center">
        <h1 className="text-4xl font-bold">
          Stay updated!
        </h1>

        <p>
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className="flex flex-col gap-4">
          <li className="flex gap-4 items-start mt-1">
              <img src={iconSvg} alt="" className="w-5 h-5 shrink-0" />
              <p>
                Product discovery and building what matters
              </p>
          </li>
          <li className="flex gap-4 items-start mt-1">
            <img src={iconSvg} alt="" className="w-5 h-5 shrink-0" />
            <p>
              Measuring to ensure updates are a success
            </p>
          </li>
          <li className="flex gap-4 items-start mt-1">
            <img src={iconSvg} alt="" className="w-5 h-5 shrink-0" />
            <p>
              And much more!
            </p>
          </li>
        </ul>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit} id="subscribe-form">
          <div className="flex flex-col gap-2">
            <div className='flex flex-row justify-between'>
              <label className="text-xs font-bold" htmlFor="email">Email address</label>
              <p className="text-xs font-bold text-[hsl(var(--red))]">{errorMessage}</p>
            </div>
         
            <input
            className={`${!notValid ? 'shadow-[inset_0_0_0_1px_hsl(var(--grey))]' : 'shadow-[inset_0_0_0_1px_hsl(var(--red))] bg-[hsla(4,100%,67%,0.35)]'} hover:shadow-[inset_0_0_0_2px_hsl(var(--blue-800))] px-4 py-4 rounded-md focus:outline-none focus:shadow-[inset_0_0_0_2px_hsl(var(--blue-800))] transition-shadow duration-300 ease-in-out`}
              type="text"
              id="email"
              placeholder="email@company.com"
              autoComplete="email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <button className="btn-primary" type="submit">
            <span>Subscribe to monthly newsletter</span>
          </button>
        </form>
      </section>
    </main>
  );
}
