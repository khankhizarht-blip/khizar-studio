import styles from "./CinematicEnvironment.module.css";

/** Gradient light fields avoid large blur filters and additional canvases. */
export default function AtmosphericLight() {
  return <div className={styles.light} />;
}
