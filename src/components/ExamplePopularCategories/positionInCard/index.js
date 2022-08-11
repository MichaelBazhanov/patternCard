function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const positionInCard = ({ children, top, bottom, left, right, ...props }) => {
  return (
    <div
      className={classNames(`absolute z-[2]
		`)}
      style={{
        top: `${top}`,
        bottom: `${bottom}`,
        left: `${left}`,
        right: `${right}`,
      }}
    >
      {children}
    </div>
  );
};
export default positionInCard;
