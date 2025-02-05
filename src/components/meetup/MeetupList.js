import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

const MeetupList = (props) => {
  return (
    <ul className={styles.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          desc={meetup.desc}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
