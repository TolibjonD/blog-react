import { useEffect, useState } from "react";
import MeetupList from "../components/meetup/MeetupList";
import { BASE_URL } from "./consonants";

const AllMetups = () => {
  const [isLoading, setisLoading] = useState(false);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch(`${BASE_URL}/meetups.json`)
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setisLoading(false);
        setloadedMeetups(meetups);
        console.log(meetups);
        
      });
  }, []);

  if (isLoading) {
    return (
      <section
        style={{
          display: "flex",
          height: "70vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/cube-loading.gif" alt="" />
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMetups;
