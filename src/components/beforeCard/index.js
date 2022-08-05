const BeforeCard = () => {
  return (
    <section className="w-1/2">
      <h2 className="font-extrabold text-4xl">Before Card</h2>

      {/* <a href="#">
        <h3>Item header</h3>
        <p>Item looong description</p>
        <img src={img} />
      </a> */}

      <p>
        Простая семантическая карточка ссылка, по версии WebStandards 2022{" "}
        <a href="https://ru.ariarzer.dev/tutorials/2022/easy-semantic-card-link.html">
          ссылка на саму статью
        </a>{" "}
      </p>
    </section>
  );
};
export default BeforeCard;
