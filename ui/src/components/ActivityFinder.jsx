import { useState, useEffect } from "react";

export const ActivityFinder = () => {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState("");
  useEffect(() => {
    fetch(
      "https://bored.api.lewagon.com/api/activity?" +
        "participants=" +
        participants
    )
      .then((response) => response.json())
      .then((json) => {
        setActivity(json.activity);
      });
  }, [participants]);
  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>
    </div>
  );
};
// ++ Reference https://bored.api.lewagon.com/documentation and add a
// new dropdown to suggest an activity based on type
