import styles from "./CinematicEnvironment.module.css";

export type SurfaceKind = "blueprint" | "layers" | "structure";

/** Pure decoration: geometry carries no information or interactive controls. */
export default function InterfaceSurface({ kind = "blueprint" }: { kind?: SurfaceKind }) {
  return (
    <div className={styles.surface} data-surface-kind={kind}>
      <div className={styles.surfaceBack} />
      <div className={styles.surfaceMiddle} />
      <div className={styles.surfaceFace}>
        <div className={styles.surfaceRail}><i /><i /><i /></div>
        <div className={styles.surfaceLayout}>
          <span /><span /><span /><span />
        </div>
        <div className={styles.surfaceBaseline} />
      </div>
    </div>
  );
}
