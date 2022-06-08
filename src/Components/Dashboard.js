import styles from "./Dashboard.module.css";
import Profile from "./Profile";
import TimeTracker from "./TimeTracker";
import Work from "./Icons/Work";
import Play from "./Icons/Play";
import Study from "./Icons/Study";
import Exercise from "./Icons/Exercise";
import Social from "./Icons/Social";
import SelfCare from "./Icons/SelfCare";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [times, setTimes] = useState([]);
  const [timeframe, setTimeframe] = useState("daily");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeFetchHandler = async () => {
      const response = await fetch(
        "https://time-tracker-dashboard-app-default-rtdb.firebaseio.com/times.json"
      );

      const data = await response.json();
      const timesArr = [];
      for (const key in data) {
        if (data[key] !== null) {
          timesArr.push({
            id: data[key],
            title: data[key].title,
            timeframes: data[key].timeframes,
          });
        }
      }
      setTimes(timesArr);
      setIsLoading(false);
    };

    timeFetchHandler();
  }, []);

  const categories = [
    { key: 1, categorie: "work", component: <Work /> },
    { key: 2, categorie: "play", component: <Play /> },
    { key: 3, categorie: "study", component: <Study /> },
    { key: 4, categorie: "exercise", component: <Exercise /> },
    { key: 5, categorie: "social", component: <Social /> },
    { key: 6, categorie: "self-care", component: <SelfCare /> },
  ];

  const timeTrackerContent = times.map((time, i) => (
    <div
      key={categories[i].key}
      className={`${styles["time-tracker__card"]} ${
        styles[categories[i].categorie]
      }`}
    >
      {categories[i].component}
      <TimeTracker
        timeTrackerData={{
          id: times[i]?.id,
          title: times[i]?.title,
          frame: times[i]?.timeframes[timeframe],
        }}
        loading={isLoading}
      />
    </div>
  ));

  const currentTimeframeHandler = (time) => {
    setTimeframe(time);
  };

  return (
    <section className={styles["dashboard-container"]}>
      <div className={styles["profile__card"]}>
        <Profile
          getTimeframe={currentTimeframeHandler}
          currentTime={timeframe}
        />
      </div>
      {timeTrackerContent}
    </section>
  );
};

export default Dashboard;
