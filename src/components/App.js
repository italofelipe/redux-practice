import React from "react";
import { selectSong } from "../actions";

import SongDetail from "./SongDetail";
import SongList from "./SongList";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eught wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
