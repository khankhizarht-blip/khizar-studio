import styles from "./CinematicEnvironment.module.css";

export type EnvironmentTone = "navy" | "ivory";

/** Decorative boundary only; never wraps or interpolates semantic text. */
export default function SceneTransition({
  from = "navy",
  to = "navy",
}: { from?: EnvironmentTone; to?: EnvironmentTone }) {
  return <div aria-hidden="true" className={styles.transition} data-from={from} data-to={to} />;
}
