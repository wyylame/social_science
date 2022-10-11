import React from "react";
import Organizers from "./Organizers";

const Info = () => {
  return (
    <section id="info">
      <div className="wrapper">
        <h1>«SOCIAL SCIENCE» (Общественные науки)</h1>
        <p>
          <span>
            <b>Цель конференции:</b>
          </span>{" "}
          создание междисциплинарного пространства для международного
          сотрудничества и обмена результатами научных исследований в контексте
          глобальных трансформаций и иных вызовов современности.
        </p>
        <br />
        <Organizers />
        <br />
        <ul>
          <h1>
            <b>Информационная поддержка</b>
          </h1>
          <li>
            <a href="http://upravlenie.uriu.ranepa.ru/login?source=%2F" target="blank">
              Научный и общественно-теоретический журнал{" "}
              <b>«Государственное и муниципальное управление»</b>
            </a>
          </li>
          <li>
            <a href="http://vestnik.uriu.ranepa.ru/login?source=%2F" target="blank">
              Научно-практический журнал{" "}
              <b>«Северо-Кавказский юридический вестник»</b>
            </a>
          </li>
          <li>
            <a href="https://www.garant.ru/info/infopartner/" target="blank">
              <b>«EUrASEAN: журнал о глобальной социально-экономической динамике»</b>
              {<br />}{<br />}
              Региональный представитель в ВУЗах ООО <b>«Гарант-Сервис-Ростов»</b>
            </a>
          </li>
        </ul>
        {/* <p>
          <span>
            <b>Информационная поддержка:</b>
          </span>{" "}
          Научный и общественно-теоретический журнал &nbsp;
          <b>«Государственное и муниципальное управление»</b>;
          Научно-практический журнал&nbsp;
          <b>«Северо-Кавказский юридический вестник»</b>;&nbsp;
          <b>
            «EUrASEAN: журнал о глобальной социально-экономической динамике»
          </b>
        </p> */}
      </div>
    </section>
  );
};

export default Info;
