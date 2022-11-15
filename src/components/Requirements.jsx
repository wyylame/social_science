import React from "react";

import example from "../assets/example.pdf";

const Requirements = () => {
  return (
    <section id="requirements">
      <div className="wrapper">
        <h1>Требования к оформлению тезисов</h1>

        <p>
          <b>Оригинальность</b> должна составлять не менее 75% (при проверке в
          системе Антиплагиат).
          <br />
          <b>Тезисы доклада/выступления</b> представляются в виде <b>НЕ</b>
          &nbsp; архивированного прикрепленного файла формата *.doc/docx, где
          название файла – фамилия(-и), инициалы автора(-ров) – «Иванов А.А.
          Тезисы.doc» или «Иванов А.А., Петрова А.А.Тезисы doc».
          <br />
          <b>Тезисы должны иметь объем</b>&nbsp; не менее 5 страниц с учетом
          таблиц и рисунков и обязательно включать «Аннотацию» и «Ключевые
          слова», дублированные на русском и английском языках «Annotation» и
          «Keywords».
          <br />
          <b>Набор</b> в редакторе MS Word. Шрифт: Times New Roman. Размер
          шрифта 14.
          <br />
          Отступ со всех сторон – 2,0.
          <br />
          Интервал между строками: 1,5.
          <br />
          Абзацный отступ (красная строка) автоматически: 1,25.
        </p>
        <div className="theses">
          <h1>
            Структура представляемого материала <br /> (
            <a href={example} target="blank">
              см. Образец оформления тезисов
            </a>
            )
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
