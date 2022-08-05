import img from "../../assets/images/Internet sales hits.jpg";

const AfterCard = () => {
  return (
    <section className="w-full">
      <h2 className="font-extrabold text-4xl">Default Card</h2>

      {/* Первая версия карточки товара */}
      <a href="#">
        <h3>Item header</h3>
        <p>Item long description</p>
        <img src={img} />
      </a>

      {/* Вторая версия карточки товара (c одной ссылкой)*/}
      <article className="relative z-0">
        <h2>
          <a href="/item-card-test" className="cursor-pointer before:content-[''] before:block before:absolute before:-inset-0 before:bg-red-100 before:bg-opacity-40">Item header</a>
        </h2>
        <p>Item long description</p>
        <img src={img} />
      </article>

      {/* Третья версия карточки товара (с множеством ссылок)*/}
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

    </section>
  );
};
export default AfterCard;
