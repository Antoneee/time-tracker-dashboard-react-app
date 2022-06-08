import styles from "./Profile.module.css";
import profilePicture from "../Assets/image-jeremy.png";

const Profile = (props) => {
  const onDailyHandler = () => {
    props.getTimeframe("daily");
  };

  const onWeeklyHandler = () => {
    props.getTimeframe("weekly");
  };

  const onMonthlyHandler = () => {
    props.getTimeframe("monthly");
  };

  return (
    <section className={styles["profile-card__container"]}>
      <div className={styles["profile-card__top"]}>
        <figure className={styles["profile-image__container"]}>
          <img
            className={styles["profile-image"]}
            src={profilePicture}
            alt="Profile of Jeremy Robson."
          />
        </figure>
        <div className={styles["profile-card__info"]}>
          <p className={styles["profile-card__report"]}>Report for</p>
          <h2 className={styles["profile-card__name"]}>Jeremy Robson</h2>
        </div>
      </div>
      <div className={styles["profile-card__bottom"]}>
        <ul className={styles["profile-card__tabs"]}>
          <li
            className={props.currentTime === "daily" ? styles["selected"] : ""}
            onClick={onDailyHandler}
          >
            Daily
          </li>
          <li
            className={props.currentTime === "weekly" ? styles["selected"] : ""}
            onClick={onWeeklyHandler}
          >
            Weekly
          </li>
          <li
            className={
              props.currentTime === "monthly" ? styles["selected"] : ""
            }
            onClick={onMonthlyHandler}
          >
            Monthly
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;
