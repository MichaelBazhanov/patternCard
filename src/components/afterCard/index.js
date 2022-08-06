import img_divan from "../../assets/images/internet-sales-hits.jpg";
import svg_like from "../../assets/images/like.svg";
import svg_in_stock from "../../assets/images/in-stock.svg";
import svg_trends from "../../assets/images/trends.svg";
import svg_sale from "../../assets/images/sale.svg";

// test HandySvg
import Svg from '../svg'

const AfterCard = () => {
  return (
    <section
      className="px-4 w-1/2 h-screen flex flex-col items-center
    bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500"
    >
      <h2 className="font-extrabold text-4xl text-center mt-4">After Card</h2>

      <div className="w-full max-w-[422px] min-w-[260px] bg-white mt-[50%]">
        <div className="relative">
          <a
            href="/link-img"
            className="cursor-pointer block relative landscape:pb-[66.25%] portrait:pb-[75%]"
          >
            <img
              src={img_divan}
              alt="img"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </a>

          <Svg src={img_divan}/>

          <img
            src={svg_like}
            alt="like"
            className="z-[2] object-contain cursor-pointer absolute top-[20px] right-[20px]
            transition-opacity ease-in-out duration-200 hover:opacity-50
            "
          />

          <div className="flex justify-end absolute bottom-[15px] right-[15px]">
            <div className="flex justify-center items-center flex-shrink-0 rounded-full w-[50px] h-[50px] 3xl:w-[60px] 3xl:h-[60px] mr-[10px]">
              <img
                src={svg_sale}
                alt="sale"
                className="object-cover cursor-grab block"
              />
            </div>
            <div className="flex justify-center items-center flex-shrink-0 rounded-full w-[50px] h-[50px] 3xl:w-[60px] 3xl:h-[60px] mr-[10px]">
              <img
                src={svg_trends}
                alt="trends"
                className="object-cover cursor-grab block"
              />
            </div>
            <div className="flex justify-center items-center flex-shrink-0 rounded-full w-[50px] h-[50px] 3xl:w-[60px] 3xl:h-[60px]">
              <img
                src={svg_in_stock}
                alt="stock"
                className="object-cover cursor-grab"
              />
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <a
            href="/link-divan"
            className="inline-block max-w-full overflow-hidden whitespace-nowrap text-ellipsis"
          >
            Диван Динс Мини Velvet Yellow
          </a>
          <div className="flex items-baseline">
            <span className="text-lg font-medium text-red-500 after:content-['\20BD'] after:ml-1">
              39 990
            </span>
            &nbsp;
            <span className="ml-[10px] text-lg font-medium line-through text-gray-400 after:content-['\20BD'] after:ml-1">
              62 290
            </span>
            <div className="bg-label bg-no-repeat bg-contain  w-[50px] h-[24px] font-medium text-gray-400 text-sm ml-[10px]">
              <div className="flex justify-center items-center pl-[5px]">
                -35%
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-auto mb-4">
        <b className="block">
          Задача: Сделать на карточке товара множество ссылок на акции категории
          и тд и тп
        </b>
        <span>
          Простая семантическая карточка ссылка, по версии WebStandards 2022
        </span>
        &nbsp;
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
