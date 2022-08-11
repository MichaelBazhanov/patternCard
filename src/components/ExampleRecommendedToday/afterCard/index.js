import divan from "../../../assets/images/divan.jpg";
import PositionInCard from "../positionInCard";

// HandySvg
import Svg from "../../svg";
// import label from "../../../assets/images/label.svg";
import label from "../../../assets/images/example-label-3.svg";

const AfterCard = () => {
  // const [like, setLike] = useState(false);

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
      className="px-4 w-full 2sm:w-1/2 h-[calc(100vh-60px)] flex flex-col justify-between items-center
    bg-gradient-to-t from-white to-fuchsia-400"
    >
      <h2 className="font-extrabold text-4xl text-center mt-4">After Card</h2>

      <article className="z-0 bg-stone-300 rounded-md
      w-[300px] h-[356px] p-[10px] xl:w-[400px] xl:h-[500px] 3xl:w-[573px] 3xl:h-[500px] ">
        <div className="relative pb-[119%]">

          {/* Основная ссылка по умолчанию */}
          <a
            onClick={alertFunction}
            data-link="Карточка товара (c множеством ссылок)"
            href="/following-a-link-1"
            className="before:content-[''] before:block before:absolute before:-inset-0 before:cursor-pointer before:-z-[1]
            hover:bg-red-500"
            >
            <img src={divan} alt="img" role='img' className="z-[1] absolute inset-0 w-full h-full object-center object-cover"/>
          </a>

          {/* Общее позиционирование внутри блока */}
          <div
            className="absolute inset-0 flex flex-col text-white
            p-[20px] pt-[15px] xl:p-[25px] xl:pb-[30px] 3xl:p-[25px] 3xl:pb-[40px]
            "
          >

            <div className="relative w-full h-full inset-0">

              <PositionInCard top='0px' left='0px'>
                <a
                  onClick={alertFunction}
                  data-link="Карточка товара (c множеством ссылок)"
                  href="/following-a-link-4"
                  className="z-[1] relative whitespace-nowrap font-medium text-sm xl:text-lg 3xl:text-2xl">1 — 9 августа</a>
              </PositionInCard>

              <PositionInCard bottom='0px' left='0px' right='0px'>
                <a onClick={alertFunction}
                  data-link="Карточка товара (c множеством ссылок)"
                  href="/following-a-link-3">

                  <div className="z-[1] relative font-medium text-xl 3xl:text-3xl">Звездный август</div>
                  <div className="z-[1] relative mt-[5px] xl:mt-[10px] 3xl:mt-[15px] text-sm xl:text-lg 3xl:text-2xl">
                    Погружаемся в комфорт
                    <br />
                    со скидками до -50%
                  </div>
                </a>
              </PositionInCard>

              <PositionInCard top='0px' right='0px'>
                <a className="z-[1] relative w-[66px] h-[29px] flex justify-center items-center group"
                  onClick={alertFunction}
                  data-link="Карточка товара (c множеством ссылок)"
                  href="/following-a-link-2"
                >
                  <Svg
                    src={label}
                    className='absolute inset-0 text-fuchsia-400 hover:text-fuchsia-700 transition-colors'
                    adoptive
                  />

                  <div
                  className="z-[1] relative text-black px-[10px]_ py-[5px]_ ml-auto mr-2 whitespace-nowrap font-medium text-sm xl:text-lg 3xl:text-2xl
                  pointer-events-none group-hover:text-white transition-colors
                  ">−50%</div>
                </a>
              </PositionInCard>

            </div>

          </div>
        </div>
      </article>

      <p className="max-h-[350px] h-full flex flex-col justify-end">
        <b className="block">
          Задача:
          <br />
          1) Сделать карточку товара как можно проще (адаптив не выключен)
          <br />
          2) Реализовать на карточке товара множество ссылок на акции,
          категории, и тд и тп. (что бы из карточки по ним можно было реально переходить)
          <br />
          3) Реализовать простую работу с векторной графикой (SVG) на карточке
          товара.
          <br />
          4) Реализовать компоннет React который бы позиционировал блоки внутри карточки (использую абсолютное позиционирование).
        </b>
      </p>
    </section>
  );
};
export default AfterCard;

// Реализовать компоннет позиции на карточке для удобства расставленная элементов
// Верстку сделать проще
// Реиспользовать ярлык SVG label
