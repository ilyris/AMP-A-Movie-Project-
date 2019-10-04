import React from 'react';
import CastMember from "./CastMember";
import "../../App.css";
import "../MovieSliders/MovieSlider.css";

const CastMemberSlider = ({cast}) => {
  return (
    <React.Fragment>
          {cast.map(cast => (
              <CastMember
                key={cast.cast_id}
                crewMemberImage={cast.profile_path}
                title={cast.name}
                cast={cast}
              />
          ))}
    </React.Fragment>
  )
}

export default CastMemberSlider;
