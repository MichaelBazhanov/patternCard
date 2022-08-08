import divan from "../../../assets/images/divan.jpg";

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

      {/* <div className="max-w-[422px] min-w-[260px] bg-white"> */}
      <div className="w-[300px] h-[356px] p-[10px] xl:w-[400px] xl:h-[500px] 3xl:w-[573px] 3xl:h-[500px] ">
        <div className="relative before:block before:pb-[119%]">
          <a
            onClick={alertFunction}
            data-link="Карточка товара (c множеством ссылок)"
            href="/following-a-link"
            className="absolute inset-0 flex flex-col p-[20px] pt-[15px] xl:p-[25px] xl:pb-[30px] 3xl:p-[25px] 3xl:pb-[40px] text-white"
          >
            <img src={divan} alt="img" role='img' className="z-[1] absolute inset-0 w-full h-full object-center object-cover"/>
            <div className="z-[2] relative font-medium text-sm xl:text-lg 3xl:text-2xl">1 — 9 августа</div>
            <div className="z-[2] relative mt-auto font-medium text-xl 3xl:text-3xl">Звездный август</div>
            <div className="z-[2] relative mt-[5px] xl:mt-[10px] 3xl:mt-[15px] text-sm xl:text-lg 3xl:text-2xl">
            Погружаемся в комфорт
            <br />
            со скидками до -50%
            </div>
            <div className="z-[2] absolute flex justify-end before:">
              <span>до −50%</span>
            </div>
          </a>

          {/* <img
            src={svg_like}
            alt="like"
            className="z-[2] object-contain cursor-pointer absolute top-[20px] right-[20px]
            transition-opacity ease-in-out duration-200 hover:opacity-50
            "
          /> */}

          {/* <div className="flex justify-end absolute bottom-[15px] right-[15px]">
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
          </div> */}
        </div>
        {/* <div className="mt-[20px]">
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
        </div> */}
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
