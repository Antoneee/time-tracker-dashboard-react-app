import styles from "./TimeTracker.module.css";
import Ellipsis from "./Icons/Ellipsis";

const TimeTracker = (props) => {
  return (
    <section className={styles["time-tracker__container"]}>
      <div className={styles["time-tracker__header"]}>
        <h3>{!props.loading ? props.timeTrackerData.title : "----"}</h3>
        <div className={styles["ellipsis-icon"]}>
          <Ellipsis />
        </div>
      </div>
      <div className={styles["time-tracker__content"]}>
        <h2 className={styles["time-tracker__hours"]}>
          {!props.loading ? props.timeTrackerData.frame?.current : "----"}hrs
        </h2>
        <p className={styles["time-tracker__last-week"]}>
          Last Week -{" "}
          {!props.loading ? props.timeTrackerData.frame?.previous : "----"}hrs
        </p>
      </div>
    </section>
  );
};

export default TimeTracker;
