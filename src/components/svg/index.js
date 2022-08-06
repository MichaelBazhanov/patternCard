import { HandySvg } from "handy-svg";

const Svg = ({ src, width, height, fill, stroke, strokeWidth }) => {
  return <HandySvg src={src} width={width} height={height} />;
};

export default Svg;
