import { useState } from "react";
import ReactPlayer from "react-player";

const App = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(!playing);
  };

  return (
    <div style={{ width: "800px", margin: "auto" }}>
      <button onClick={handlePlay}>Parar/Reproducir</button>
      <br />
      <br />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        controls
        muted
        loop
        playing={playing}
        width={800}
        height={500}
      />
    </div>
  );
};

export default App;
