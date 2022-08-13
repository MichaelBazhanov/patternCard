import pramye_divany from "../../../assets/images/pramye_divany.jpg";
import PositionInCardToGrid from "../positionInCardToGrid";

// // HandySvg
// import Svg from "../../svg";
// // import label from "../../../assets/images/label.svg";
// import label from "../../../assets/images/example-label-3.svg";

const AfterCard = () => {
  const alertFunction = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const a = e.target.closest("a");
    const href = a.href;
    const link = a.dataset.link;

    alert(`${link} ::: Переход по ссылке : ${href}`);
  };

  return (
    <section
      className="h-[calc(100vh-60px)] flex flex-col justify-between items-center
    bg-gradient-to-t from-white to-fuchsia-400"
    >
      <h2 className="font-extrabold text-4xl text-center mt-4">After Card</h2>

      <article className="w-full relative rounded-md">
        <div className="relative pb-[66.25%]">
          {/* img card */}
          <a
            onClick={alertFunction}
            data-link="Карточка товара (с множеством ссылок)"
            href="/following-a-link-1"
            className="absolute inset-0"
          >
            <img
              src={pramye_divany}
              alt="img"
              role="img"
              className="z-[1] absolute inset-0 w-full h-full object-center object-cover"
            />
          </a>

          {/* Общее позиционирование внутри блока */}
          <div
            className="absolute inset-0 grid grid-cols-6 grid-rows-6
            p-[20px] pt-[15px] xl:p-[25px] xl:pb-[30px] 3xl:p-[25px] 3xl:pb-[40px]
            "
          >
            {/* top title */}
            <PositionInCardToGrid
              className="z-[2] relative col-start-1 col-end-7 row-start-1 row-end-2
            justify-start items-start"
            >
              <a
                onClick={alertFunction}
                data-link="Карточка товара (с множеством ссылок)"
                href="/following-a-link-2"
                className="inline-flex"
              >
                <h4 className="text-lg font-medium">Диваны прямые</h4>
                <span className="ml-2 text-xs text-gray-300">602 модели</span>
              </a>
            </PositionInCardToGrid>

            {/* price item*/}
            <PositionInCardToGrid
              className="z-[2] relative col-start-1 col-end-6 row-start-6 row-end-6
              flex justify-start items-end"
            >
              <a
                onClick={alertFunction}
                data-link="Карточка товара (с множеством ссылок)"
                href="/following-a-link-3"
                className="z-[2] relative ml-[20px] inline-flex
                before:content-[''] before:absolute before:left-[-26px] before:top-0 before:h-full before:w-[33px] before:bg-left-arrow before:bg-no-repeat before:bg-center before:bg-contain
              "
              >
                <span
                  className="px-[20px] py-[4px] bg-white text-black whitespace-nowrap rounded-tr-lg rounded-br-lg
                font-medium text-lg
                "
                >
                  от&nbsp;
                  <span className="text-lg font-medium after:content-['\20BD'] after:ml-1">
                    19 490
                  </span>
                </span>
              </a>
            </PositionInCardToGrid>

            {/* Добавляем случайный элемент для теста позиции*/}
            <PositionInCardToGrid className="z-[2] relative col-start-6 col-end-7 row-start-6 row-end-6">
              <a
                onClick={alertFunction}
                data-link="Карточка товара (с множеством ссылок)"
                href="/following-a-link-4"
                className="bg-indigo-600 w-14 h-14 whitespace-nowrap rounded-full flex justify-center items-center text-white"
              >
                test-1
              </a>
            </PositionInCardToGrid>
            {/* Добавляем случайный элемент для теста позиции*/}
            <PositionInCardToGrid className="z-[2] relative col-start-3 col-end-4 row-start-3 row-end-4">
              <a
                onClick={alertFunction}
                data-link="Карточка товара (с множеством ссылок)"
                href="/following-a-link-5"
                className="bg-pink-600 w-14 h-14 whitespace-nowrap rounded-full flex justify-center items-center text-white"
              >
                test-2
              </a>
            </PositionInCardToGrid>
          </div>
        </div>
      </article>

      <p className="max-h-[350px] h-full flex flex-col justify-end">
        <b className="block text-sm">
          Задача:
          <br />
          1) Сделать карточку товара как можно проще (адаптив не выключен)
          <br />
          2) Реализовать на карточке товара множество ссылок на акции,
          категории, и тд и тп. (что бы из карточки по ним можно было реально
          переходить)
          <br />
          3) Реализовать простую работу с векторной графикой (SVG) на карточке
          товара.
          <br />
          4) Реализовать компоннет React который бы позиционировал блоки внутри
          карточки (использую Grid System).
          <br />
          5) Внимание если в SVG Нужно манипулировать более чем 2 цветами на
          допустим HOVER(тп тд) то SVG должен вставляться напрямую а не через
          shadow-dom - use. В идеале SVG положить в компоннет и там уже работать
          с любым кол-во цветов.
        </b>
      </p>
    </section>
  );
};
export default AfterCard;
