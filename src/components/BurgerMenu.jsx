import React from "react";
import { BurgerContext } from "../App";

import file from "../assets/SOCIAL_SCIENCE.pdf";

const BurgerMenu = ({ ref }) => {
  const { burgerIsOpen, setBurgerIsOpen } = React.useContext(BurgerContext);

  function handleClickCloseBurgerBtn() {
    setBurgerIsOpen(false);
  }

  const list = [
    {
      link: "https://forms.gle/SFaoJRiU1CS4Ni2h9",
      title: "Регистрация",
    },
    {
      link: file,
      title: "Информационное письмо",
    },
    {
      link: "#sections",
      title: "Секции симпозиума",
    },
    {
      link: "#committee",
      title: "Программный комитет",
    },
    {
      link: "#requirements",
      title: "Требования к оформлению тезисов",
    },
    {
      link: "#contacts",
      title: "Контакты",
    },
  ];

  return (
    <div
      className={`burger-menu${burgerIsOpen ? " active" : undefined}`}
      ref={ref}
    >
      <div className="bg"></div>
      <div className="burger-menu__panel">
        <div className="close" onClick={handleClickCloseBurgerBtn}></div>
        <ul>
          {list.map((item) => (
            <li>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;