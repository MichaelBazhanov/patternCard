import pramye_divany from "../../../assets/images/pramye_divany.jpg";
// import PositionInCard from "../positionInCard";

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

      <article className="w-full relative pb-[66.25%] rounded-md overflow-hidden">
        <div className="absolute inset-0 flex flex-col p-[20px] pt-[15px] xl:p-[25px] xl:pb-[30px] 3xl:p-[25px] 3xl:pb-[40px] text-black">
          {/* img card */}
          <a
            onClick={alertFunction}
            data-link="Карточка товара (с множеством ссылок)"
            href="/following-a-link-1"
            className="absolute inset-0 z-0"
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
            className="absolute inset-0 flex flex-col text-white
            p-[20px] pt-[15px] xl:p-[25px] xl:pb-[30px] 3xl:p-[25px] 3xl:pb-[40px]
            "
          >

          </div>
          {/* top title */}
          <div className="z-[2] relative flex">
            <span className="text-lg font-medium">Диваны прямые</span>
            <span className="ml-2 text-xs text-gray-300">602 модели</span>
          </div>

          {/* price item*/}
          <div
            className="z-[2] absolute left-[20px] bottom-[20px] flex justify-end
            ml-[20px]
            before:content-[''] before:absolute before:left-[-27px] before:top-0 before:h-full before:w-[33px] before:bg-left-arrow before:bg-no-repeat before:bg-center before:bg-contain
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
