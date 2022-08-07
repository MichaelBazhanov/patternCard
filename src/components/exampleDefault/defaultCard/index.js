import img from "../../../assets/images/internet-sales-hits-img.jpg";
import { Link } from "react-router-dom";

const DefaultComponent = () => {
  return (
    <div>
      <h2 className="font-extrabold text-4xl text-center mt-4">Default Card</h2>

      <section className="w-full flex flex-wrap container px-4">
        {/* Первая версия карточки товара */}
        <section className="">
          <h4 className="font-extrabold text-4xl text-center mt-8">
            Первая реализация
          </h4>
          <Link to="/Первая версия карточки товара" className="w-full max-w-[422px] min-w-[260px] select-none flex flex-col items-center my-8 mx-auto bg-gray-100">
            <h3>Item header</h3>
            <p>Item long description</p>
            <img src={img} />
          </Link>

          <div>
            <h2><b>Проблема</b></h2>
            <p>
              Во-первых это не семантично. Ссылка предполагает наличие внутри
              себя текста, который описывает, куда она ведет. Помещать туда
              что-то кроме него - значит путать пользователей со скринридерами и
              поисковых роботов.
            </p>
            <p>
              Во-вторых внутри карточки могут предполагаться другие ссылки.
              Например, на автора статьи или категорию товара
            </p>
          </div>
        </section>

        {/* Вторая версия карточки товара (c одной ссылкой)*/}
        <section className="w-full flex flex-col justify-between">
          <h2 className="font-extrabold text-4xl text-center mt-8">
            Реализация получше
          </h2>

          <article className="relative z-0 flex flex-col items-center my-8 mx-auto bg-gray-100">
            <h4>
              <Link
                to="/Вторая версия карточки товара (c одной ссылкой)"
                className="cursor-pointer before:content-[''] before:block before:absolute before:-inset-0"
              >
                Item header
              </Link>
            </h4>
            <p>Item long description</p>
            <img src={img} />
          </article>

          <div>
            <h2>Изменение</h2>
            <p>
              Теперь верстка семантична и будет нормально прочитана
              скринридерами, роботами и другими разработчиками.
            </p>
            <p>
              Переход по ссылке по клику в любое место (кроме ссылки на автора),
              а не только в заголовок
            </p>
          </div>
        </section>

        {/* Третья версия карточки товара (с множеством ссылок)*/}

        <section className="w-full flex flex-col justify-between">
          <h2 className="font-extrabold text-4xl text-center mt-8">
            "Вложенные" ссылки
          </h2>

          <article className="relative z-0 flex flex-col items-center my-8 mx-auto bg-gray-100">
            <h3>
              <Link
                to="/Третья версия карточки товара (с множеством ссылок)"
                className="before:content-[''] before:block before:absolute before:-inset-0 before:cursor-pointer before:-z-[1]
            hover:bg-red-500"
              >
                Item header
              </Link>
            </h3>
            <p className="pointer-events-none">Item long description</p>
            <Link to="/author">Michael Bazhanov</Link>
            <img src={img} className="pointer-events-none" />
          </article>

          <div>
            <h4>Разберем</h4>

            <ul className="list-decimal list-inside">
              <li>
                добавили z-index: -1 для псевдо-элемента, чтобы убрать его под
                все остальные элементы в карточке
              </li>
              <li>
                добавили z-index: 0 для всей карточки, чтобы создать новый
                локальный контент наложения, иначе бы псевдо был в глобальном
                контексте наложения и убрался под элемент body
              </li>
              <li>
                добавили pointer-events: none; для описания и картинки, чтобы
                сделать их прозрачными для событий мыши, теперь клики в них
                считаются кликами в элемент ровно под ними, то есть в псевдо{" "}
              </li>
              <li>
                элементы внутри карточки, которым мы не указали pointer-events
                (ссылка на автора в данном случае) будут лежать поверх псевдо и
                не пропускать через себя события мыши, это можно использовать
                для красивых ховер-эффектов
              </li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
};
export default DefaultComponent;
