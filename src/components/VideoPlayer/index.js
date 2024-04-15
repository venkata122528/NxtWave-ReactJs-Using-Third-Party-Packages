import ReactPlayer from 'react-player'
import './index.css'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url="https://youtu.be/zBlklssMFEo?si=oKXh4Fg_7fYhUOpJ" />
    </div>
  </div>
)

export default VideoPlayer
