import React, {useState} from "react";

import "./styles/app.scss";

import data from "./util";

//adding components
import Player from "./components/Player";
import Song from "./components/Songs";

function App() {
	//state
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);


    return (
    	<div className="App">
    	    <Song currentSong={currentSong} />
    	    <Player 
				isPlaying={isPlaying} 
				setIsPlaying={setIsPlaying} 
				currentSong={currentSong} 
			/>
    	</div>
    );
}

export default App;