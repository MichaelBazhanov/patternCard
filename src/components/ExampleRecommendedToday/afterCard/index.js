import img_divan from "../../../assets/images/internet-sales-hits-img.jpg";
import svg_like from "../../../assets/images/like.svg";
import svg_in_stock from "../../../assets/images/in-stock.svg";
import svg_trends from "../../../assets/images/trends.svg";
import svg_sale from "../../../assets/images/sale.svg";

// test HandySvg
import Svg from "../../svg";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AfterCard = () => {
  const [like, setLike] = useState(false);

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
    bg-gradient-to-t from-white  to-fuchsia-400"
    >
      <h2 className="font-extrabold text-4xl text-center mt-4">After Card</h2>

      <article className="w-full max-w-[422px] min-w-[260px] bg-white select-none">
        {/* COMPONENT CARD */}
        <div className="relative">
          {/* COMPONENT IMG */}
          <a
            onClick={alertFunction}
            data-link="Карточка товара (c множеством ссылок)"
            href="/following-a-link-1"
            className="cursor-pointer block relative landscape:pb-[66.25%] portrait:pb-[75%]"
          >
            <img
              src={img_divan}
              alt="img"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </a>

          {/* COMPONENT LIKE */}
          <div onClick={() => setLike(!like)}>
            <Svg
              src={svg_like}
              className={classNames(
                `
                z-[2] object-contain cursor-pointer
                absolute top-[20px] right-[20px]
                transition-[opacity,colors] ease-in-out duration-200 hover:opacity-50
                stroke-neutral-700`,
                like ? "fill-neutral-700" : "fill-transparent"
              )}
              width="23"
              height="22"
            />
          </div>

          {/* COMPONENT DESCRIPTION CARD */}
          <div className="flex justify-end absolute bottom-[15px] right-[15px]">
            <a
              onClick={alertFunction}
              data-link="Карточка товара (c множеством ссылок)"
              href="/category-sale"
              className="flex justify-center items-center flex-shrink-0 rounded-full w-[50px] h-[50px] 3xl:w-[60px] 3xl:h-[60px] mr-[10px]"
            >
              <Svg
                src={svg_sale}
                className={classNames(
                  `object-cover cursor-grab block transition-[opacity,colors] ease-in-out duration-200 hover:opacity-75 text-gray-500 hover:text-red-500`
                )}
                width="60"
                height="60"
              />
            </a>
            <a
              onClick={alertFunction}
              data-link="Карточка товара (c множеством ссылок)"
              href="/category-trends"
              className="flex justify-center items-center flex-shrink-0 rounded-full w-[50px] h-[50px] 3xl:w-[60px] 3xl:h-[60px] mr-[10px]"
            >
              <Svg
                src={svg_trends}
                className={classNames(
                  `object-cover cursor-grab block transition-[opacity,colors] ease-in-out duration-200 hover:opacity-75 text-gray-500 hover:text-red-500`
                )}
                width="60"
                height="60"
              />
            </a>
            <a
              onClick={alertFunction}
              data-link="Карточка товара (c множеством ссылок)"
              href="/category-in-stock"
              className="flex justify-center items-center flex-shrink-0 rounded-full w-[50px] h-[50px] 3xl:w-[60px] 3xl:h-[60px]"
            >
              <Svg
                src={svg_in_stock}
                className={classNames(
                  `object-cover cursor-grab block transition-[opacity,colors] ease-in-out duration-200 hover:opacity-75 text-gray-500 hover:text-red-500`
                )}
                width="60"
                height="60"
              />
            </a>
          </div>
        </div>

        {/* COMPONENT DESCRIPTION PRICE */}
        <div className="mt-[20px]">
          <a
            onClick={alertFunction}
            data-link="Карточка товара (c множеством ссылок)"
            href="/link-divan"
            className="inline-block max-w-full overflow-hidden whitespace-nowrap text-ellipsis"
          >
            Диван Динс Мини Velvet Yellow
          </a>
          <div className="flex items-baseline">
            <span className="text-lg font-medium text-red-500 after:content-['\20bd'] after:ml-1">
              39 990
            </span>
            &nbsp;
            <span className="ml-[10px] text-lg font-medium line-through text-gray-400 after:content-['\20bd'] after:ml-1">
              62 290
            </span>
            <div className="bg-label bg-no-repeat bg-contain  w-[50px] h-[24px] font-medium text-gray-400 text-sm ml-[10px]">
              <div className="flex justify-center items-center pl-[5px]">
                -35%
              </div>
            </div>
          </div>
        </div>
      </article>

      <p className="max-h-52 h-full flex flex-col justify-end">
        <b className="block">
          Задача:
          <br />
          1) Реализовать на карточке товара множество ссылок на акции,
          категории, и тд и тп.
          <br />
          2) Реализовать простую работу с векторной графикой (SVG) на карточке
          товара.
        </b>
        <span>
          Простая семантическая карточка ссылка, по версии WebStandards 2022
        </span>
        <a
          href="https://ru.ariarzer.dev/tutorials/2022/easy-semantic-card-link.html"
          className="font-medium text-slate-600"
        >
          (ссылка на саму статью)
        </a>
      </p>
    </section>
  );
};
export default AfterCard;

// Реализовать компоннет позиции на карточке для удобства расставленная элементов
// Верстку сделать проще
// Реиспользовать ярлык SVG label
