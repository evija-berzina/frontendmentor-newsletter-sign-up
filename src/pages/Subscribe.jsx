import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import mobileSvg from "../../assets/images/illustration-sign-up-mobile.svg";
import tabletSvg from "../../assets/images/illustration-sign-up-tablet.svg";
import desktopSvg from "../../assets/images/illustration-sign-up-desktop.svg";
import iconSvg from "../../assets/images/icon-list.svg";

export function Subscribe() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/ThankYou", {state: {email}});
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <main className="flex flex-col bg-[hsl(var(--white))] sm:max-w-xl sm:my-8 sm:p-8 sm:rounded-2xl lg:flex-row lg:flex-row-reverse lg:gap-8 lg:max-w-4xl">
      <picture className="flex-1">
        <source media="(min-width:1024px)" srcSet={desktopSvg} />
        <source media="(min-width:640px)" srcSet={tabletSvg} />
        <img src={mobileSvg} alt="Newsletter illustration" className="w-full object-cover" />
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
              <img src={iconSvg} alt="Icon checkmark for list" />
              <p>
                Product discovery and building what matters
              </p>
          </li>
          <li className="flex gap-4 items-start mt-1">
            <img src={iconSvg} alt="Icon checkmark for list" />
            <p>
              Measuring to ensure updates are a success
            </p>
          </li>
          <li className="flex gap-4 items-start mt-1">
            <img src={iconSvg} alt="Icon checkmark for list" />
            <p>
              And much more!
            </p>
          </li>
        </ul>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit} id="subscribe-form">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold" htmlFor="email">Email address</label>
         
            <input
            className="border border-gray-300 px-4 py-4 rounded-md"
              type="email"
              id="email"
              placeholder="email@company.com"
              autoComplete="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <button className="bg-[hsl(var(--blue-800))] text-[hsl(var(--white))] font-bold px-4 py-4 rounded-md" type="submit">
            Subscribe to monthly newsletter
          </button>
        </form>
      </section>
    </main>
  );
}
