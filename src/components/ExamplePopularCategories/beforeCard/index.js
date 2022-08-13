import pramye_divany from "../../../assets/images/pramye_divany.jpg";

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
    <section className="h-[calc(100vh-60px)] flex flex-col justify-between items-center">
      <h2 className="font-extrabold text-4xl text-center mt-4">Before Card</h2>

      <div className="w-full relative pb-[66.25%]">
        <a
          onClick={alertFunction}
          data-link="Карточка товара (c одной ссылкой)"
          href="/following-a-link"
          className="absolute inset-0 flex flex-col p-[20px] pt-[15px] xl:p-[25px] xl:pb-[30px] 3xl:p-[25px] 3xl:pb-[40px] text-black"
        >
          {/* img card */}
          <img
            src={pramye_divany}
            alt="img"
            role="img"
            className="z-[1] absolute inset-0 w-full h-full object-center object-cover"
          />

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
              <span className="text-lg font-medium after:content-['\20BD'] after:ml-1">
                от 19 490
              </span>
            </span>
          </div>
        </a>
      </div>

      <p className="max-h-[350px] h-full flex flex-col justify-end text-sm">
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
