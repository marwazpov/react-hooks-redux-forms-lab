import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);

  const onBandSubmit = (band) => {
    dispatch(bandAdded(band));
  };
  return (
    <div>
      <BandInput onBandSubmit={onBandSubmit} />
      {bands?.map((band) => (
        <p key={band}>{band}</p>
      ))}
    </div>
  );
}

export default BandsContainer;