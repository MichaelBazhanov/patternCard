import img from "../../assets/images/Internet sales hits.jpg";

const AfterCard = () => {
  return (
    <section className="w-1/2">
      <h2 className="font-extrabold text-4xl">After Card</h2>


      <article className="relative z-0">
        <h3>
          <a
            href="/item-card-test"
            className="before:content-[''] before:block before:absolute before:-inset-0 before:bg-red-100 before:bg-opacity-40
            before:cursor-pointer before:-z-[1]
            hover:bg-red-500"
          >
            Item header
          </a>
        </h3>
        <p className="pointer-events-none">Item long description</p>
        <a href="/author">Michael Bazhanov</a>
        <img src={img} className="pointer-events-none" />
      </article>

      <p>
        Стандартная карточка товара интернет магазина{" "}
        <a href="https://www.divan.ru/vladimir/">Диван.ru</a>{" "}
      </p>
    </section>
  );
};
export default AfterCard;
