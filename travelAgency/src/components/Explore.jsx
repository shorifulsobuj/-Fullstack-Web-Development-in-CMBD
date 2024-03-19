import React from "react";

const Explore = ({ title, placesAPI }) => {
  return (
    <>
      <div className="">
        <div className="">
          <div className="">
            <h1 className="">{title}</h1>
            <div className="">
              {placesAPI?.map((val, i) => (
                <div key={i} className="">
                  <div className="">
                    <img src={val.placeImg} alt={val.location} className="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
