import { HandySvg } from "handy-svg";

const Svg = ({ src, width, height, className }) => {
  return <HandySvg src={src} width={width} height={height} className={className}/>;
};

export default Svg;
