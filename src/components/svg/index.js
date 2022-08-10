import { HandySvg } from "handy-svg";

// adoptive - режим в котором высота и ширина картинки формируется родителем или классам на самом ребенке
const Svg = ({ src, width, height, stroke, className, adoptive }) => {
  return adoptive ? (
    <HandySvg
      src={src}
      width='100%'
      height='100%'
      className={className}
      stroke={stroke}
      role="img"
    />
  ) : (
    <HandySvg
      src={src}
      width={width}
      height={height}
      className={className}
      stroke={stroke}
      role="img"
    />
  );
};

export default Svg;
