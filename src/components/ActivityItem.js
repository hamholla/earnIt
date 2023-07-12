function Activity({ activity, handleClick }) {
  return (
    <div
      onClick={() => handleClick(activity)}
      className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-4 hover:shadow-lg hover:bg-gray-100 cursor-pointer"
    >
      <div>
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?size=600x300&maptype=roadmap&path=enc:${activity.map.summary_polyline}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          alt={"map of activity"}
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {activity.name}
        </h5>
        <div className="block text-base font-light leading-relaxed text-inherit antialiased">
          <div>Distance: {(activity.distance / 1609.344).toFixed(1)} miles</div>
          <div>
            Average Speed: {(activity.average_speed * 2.2369363).toFixed(1)} mph
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
