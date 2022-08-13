const positionInCardToGrid = ({ children, className, ...props }) => {
  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
};
export default positionInCardToGrid;
