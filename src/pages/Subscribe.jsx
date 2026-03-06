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
    <main>
      <picture>
        <source media="(min-width:650px)" srcSet={desktopSvg} />
        <source media="(min-width:465px)" srcSet={tabletSvg} />
        <img src={mobileSvg} alt="Newsletter illustration" />
      </picture>

      <h1>
        Stay updated!
      </h1>

      <p>
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <ul>
        <li>
            <img src={iconSvg} alt="Icon checkmark for list" />
            <p>
              Product discovery and building what matters
            </p>
        </li>
        <li>
          <img src={iconSvg} alt="Icon checkmark for list" />
          <p>
            Measuring to ensure updates are a success
          </p>
        </li>
        <li>
          <img src={iconSvg} alt="Icon checkmark for list" />
          <p>
            And much more!
          </p>
        </li>
      </ul>

      <form onSubmit={handleSubmit} id="subscribe-form">
        <label htmlFor="email">Email address</label>

        <input
          type="email"
          id="email"
          placeholder="email@company.com"
          autoComplete="email"
          value={email}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Subscribe to monthly newsletter
        </button>
      </form>
    </main>
  );
}
