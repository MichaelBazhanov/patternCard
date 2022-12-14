import img_divan from "../../../assets/images/internet-sales-hits-img.jpg";
import svg_like from "../../../assets/images/like.svg";
import svg_in_stock from "../../../assets/images/in-stock.svg";
import svg_trends from "../../../assets/images/trends.svg";
import svg_sale from "../../../assets/images/sale.svg";

const BeforeCard = () => {
  const alertFunction = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const a = e.target.closest("a");
    const href = a.href;
    const link = a.dataset.link;

    alert(`${link} ::: Переход по ссылке : ${href}`);
  };

  return (
    <section className="px-4 w-full 2sm:w-1/2 h-[calc(100vh-60px)] overflow-hidden flex flex-col justify-between items-center">
      <h2 className="font-extrabold text-4xl text-center mt-4">Before Card</h2>

      <div className="max-w-[422px] min-w-[260px] bg-white">
        <div className="relative">
          <a
            onClick={alertFunction}
            data-link="Карточка товара (c множеством ссылок)"
            href="/following-a-link"
            className="cursor-pointer"
          >
            <img src={img_divan} alt="img" />
          </a>

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
            onClick={alertFunction}
            data-link="Карточка товара (c множеством ссылок)"
            href="/following-a-link"
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

      <p className="max-h-52 h-full flex flex-col justify-end">
        Стандартная карточка товара интернет магазина
        <a
          href="https://www.divan.ru/vladimir/"
          className="font-medium text-slate-600"
        >
          Диван.ru
        </a>
      </p>
    </section>
  );
};
export default BeforeCard;
