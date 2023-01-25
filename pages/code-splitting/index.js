import dynamic from "next/dynamic";

const Box = dynamic(() => import("../../components/box"));
const Circle = dynamic(() => import("../../components/circle"));

export default function CodeSplitting() {
  return (
    <div>
      <div>code spliting</div>

      <Box />
      <Circle />
    </div>
  );
}
