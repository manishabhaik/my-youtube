import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import {useSearchParams } from 'react-router-dom';
import CommentsContainer from "./CommentsContainer";
import LiveChat from './LiveChat';
import Suggestions from './Suggestions';
import { SUGGEST_VIDEO_API } from '../utils/constant';

const WatchVideo = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const [videoInfo,setVideoInfo] = useState([]);

    useEffect(()=>{
             dispatch(closeMenu());
    },[]);

    useEffect(() => {
      getVideoInfo(videoId);
    }, []);

    const getVideoInfo = async()=>{
      const data = await fetch(
        SUGGEST_VIDEO_API +
          "&part=" +
          "snippet%2CcontentDetails%2Cstatistics&id=" +
          videoId
      );
      const json = await data.json();
      setVideoInfo(json?.items[0]);
      console.log("single data=>", json);
    }

  return (
    <div className="col-span-10 flex flex-col">
      <div className="px-5 flex">
        <div className="">
          <iframe
            width="760"
            height="515"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <CommentsContainer className="flex-1" />
        </div>
        <div className="w-full px-4">
          <LiveChat />
          <div>
            <h1 className='font-bold text-xl py-4'>Suggested Videos</h1>
          </div>
          <Suggestions videoId={videoId} info={videoInfo} />
        </div>
      </div>
    </div>
  );
}

export default WatchVideo
