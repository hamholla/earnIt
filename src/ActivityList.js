import React, { useState, useEffect } from "react";
import Activity from "./Activity";

function ActivityList() {
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState({});
  const [selectedActivity, setSelectedActivity] = useState(null);
  //Strava Credentials
  let clientID = process.env.REACT_APP_STRAVA_API_CLIENT_ID;
  let clientSecret = process.env.REACT_APP_STRAVA_API_KEY;

  // refresh token and call address
  const refreshToken = "3afb1cd6e9099d1d198b1f515f35744175d48f20";
  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

  // endpoint for read-all activities. temporary token is added in getActivities()
  const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`;

  // Use refresh token to get current access token
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(callRefresh, {
        method: "POST",
      }).then((res) => res.json());
      getActivities(result.access_token);
    };
    fetchData();
  }, [callRefresh]);

  // use current access token to call all activities
  const getActivities = (access) => {
    // console.log(callActivities + access)
    fetch(callActivities + access)
      .then((res) => res.json())
      .then(
        (data) => setActivities(data),
        setIsLoading((prev) => !prev)
      )
      .catch((e) => console.log(e));
  };

  const getSingleActivity = (access, id) => {
    const callActivity = `https://www.strava.com/api/v3/activities/${id}?access_token=`;
    fetch(callActivity + access)
      .then((res) => res.json())
      .then((data) => setSelectedActivity(data))
      .catch((e) => console.log(e));
  };

  const handleActivitySelect = (activity) => {
    console.log(selectedActivity);
    getSingleActivity(refreshToken, activity.id);
    console.log(selectedActivity);
  };

  let renderedActivities = [];

  if (isLoading) {
    renderedActivities = <div>Loading...</div>;
  } else if (activities.length > 0) {
    renderedActivities = activities.map((activity) => {
      return (
        <Activity
          key={activity.id}
          activity={activity}
          handleClick={handleActivitySelect}
        />
      );
    });
  } else {
    renderedActivities = <div>No activities found</div>;
  }

  return (
    <div className="container mx-auto flex flex-row flex-wrap justify-center">
      {renderedActivities}
    </div>
  );
}

export default ActivityList;
