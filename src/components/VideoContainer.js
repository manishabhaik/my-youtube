import React, { useEffect, useState } from 'react'
import VideoCard, { AdVideoCard } from './VideoCard';
import { YOUTUBE_API } from '../utils/constant';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos,setVideos] = useState([]);
    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos = async()=>{
       const data =  await fetch(YOUTUBE_API);
       const json = await data.json();
       setVideos(json.items);
    }
  return (
    <div className="flex flex-wrap">
      {/* {videos && <AdVideoCard info={videos[0]} />} */}
      {videos &&
        videos.map((data) => (
          <Link key={data.id}  to={"/watch?v=" + data.id}>
            <VideoCard info={data} />
          </Link>
        ))}
    </div>
  );
}

export default VideoContainer
