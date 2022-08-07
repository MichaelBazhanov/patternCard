import { HandySvg } from "handy-svg";

const Svg = ({ src, width, height, stroke, className }) => {
  return (
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
