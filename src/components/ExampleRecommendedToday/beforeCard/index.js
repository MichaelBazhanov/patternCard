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
    <section className="px-4 w-full 2sm:w-1/2 h-[calc(100vh-60px)] flex flex-col justify-between items-center">
      <h2 className="font-extrabold text-4xl text-center mt-4">Before Card</h2>

      <div className="w-[300px] h-[356px] p-[10px] xl:w-[400px] xl:h-[500px] 3xl:w-[573px] 3xl:h-[500px] ">
        <div className="relative before:block before:pb-[119%]">
          <a
            onClick={alertFunction}
            data-link="Карточка товара (c одной ссылкой)"
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

            <div className="z-[2] absolute right-[15px] top-[20px] flex justify-end
            before:content-[''] before:bg-left-arrow before:w-[16px] xl:before:w-[21px]  before:bg-no-repeat before:bg-center before:bg-[length:auto_100%]
            ">
              <span className="px-[10px] py-[5px] bg-white text-black whitespace-nowrap rounded-tr-lg rounded-br-lg
              font-medium text-sm xl:text-lg 3xl:text-2xl
              ">до −50%</span>
            </div>
          </a>
        </div>
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
