import React, { useState, useEffect } from "react";
import Activity from "./Activity";

function ActivityList() {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState({});
  const [selectedActivity, setSelectedActivity] = useState(null);

  let clientID = process.env.REACT_APP_STRAVA_API_CLIENT_ID;
  let clientSecret = process.env.REACT_APP_STRAVA_API_KEY;

  const refreshToken = "3afb1cd6e9099d1d198b1f515f35744175d48f20";
  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

  const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`;

  const getAccessToken = async () => {
    const result = await fetch(callRefresh, {
      method: "POST",
    }).then((res) => res.json());
    return result.access_token;
  };

  const accessToken = getAccessToken().then((accessToken) => {
    return accessToken;
  });

  const getActivities = (access) => {
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
    const fetchActivityData = async () => {
      getSingleActivity(await accessToken, activity.id);
    };
    fetchActivityData();
  };

  useEffect(() => {
    const fetchData = async () => {
      getActivities(await accessToken);
    };
    fetchData();
  }, [callRefresh]);

  console.log(selectedActivity);

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
