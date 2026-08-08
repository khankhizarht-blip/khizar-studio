import Noise from "./Noise";
import Grid from "./Grid";
import Gradient from "./Gradient";

export default function Background() {
  return (
    <>
      <Gradient />
      <Grid />
      <Noise />
    </>
  );
}