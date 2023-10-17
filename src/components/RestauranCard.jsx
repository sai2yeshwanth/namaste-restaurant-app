// RestauranCard
export const RestauranCard = (props) => {
  const { data } = props;
  // console.log(data.info);
  return (
    <div className="res-card">
      <img
        className="res-img-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.info.cloudinaryImageId}`}
      />
      <h5>{data.info.name}</h5>
      <h5>{data.info.locality}</h5>
      <h5>{data.info.cuisines.join(", ")}</h5>
      <h5>{data.info.avgRating} stars</h5>
      <h5>{data.info.costForTwo}</h5>
    </div>
  );
};
