
import Gradient from "./Gradient";
import Grid from "./Grid";

export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <Gradient />
      <Grid />
    </div>
  );
}
