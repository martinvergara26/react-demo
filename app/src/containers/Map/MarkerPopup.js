import React from 'react';
import Button from "@material-ui/core/Button";
import {getSavedMarkers} from "../../userStorage";

export function MarkerPopup ({id}) {
  const savedMarkers = getSavedMarkers();

  if(savedMarkers.includes(id)){
    return <div>
      <div>
        <p>This is marker {id}</p>
        <p>Already saved marker</p>
      </div>
      <Button variant="contained" color="secondary" className={'delete-marker'} marker-id={id}>
        Delete
      </Button>
    </div>
  } else {
    return <div>
      <div>
        <p>This is marker {id}</p>
      </div>
      <Button variant="contained" color="primary" className={'save-marker'} marker-id={id}>
        Save
      </Button>
    </div>
  }
}