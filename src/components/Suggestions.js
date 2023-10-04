import React, { useEffect, useState } from 'react'
import { SEARCH_VIDEO_API } from '../utils/constant';
import { calcTime, calcViews } from '../utils/helper';
import { Link } from "react-router-dom";

const Suggestions = ({ videoId, info }) => {

  const [suggestVideo, setSuggestVideo] = useState(null);

  useEffect(() => {
    getSuggestionVideos();
  }, []);

  const getSuggestionVideos = async () => {
    const data = await fetch(
      SEARCH_VIDEO_API +
        `&part=snippet&type=video&maxResults=15&videoDuration=medium&q=${info?.snippet?.title.slice(
          0,
          40
        )}`
    );
    const json = await data.json();
    setSuggestVideo(json?.items);
    console.log("search result =>", json);
  };

  return (
    <div className="flex flex-col">
      {suggestVideo &&
        suggestVideo.map((vinfo) => (
        //   <Link key={vinfo?.id?.videoId} to={"/watch?v=" + vinfo?.id?.videoId}>
            <div className="cursor-pointer flex">
              <div className="w-60 px-2 py-3 ">
                <img
                  className="rounded-lg hover:rounded-none"
                  src={vinfo?.snippet?.thumbnails.medium.url}
                  alt="video-thumbnail"
                />
              </div>
              <div className="">
                <ul>
                  <li className="font-bold py-2 w-56">
                    {vinfo?.snippet?.title.length > 70
                      ? vinfo?.snippet?.title.substr(0, 70)
                      : vinfo?.snippet?.title}
                  </li>
                  <li>
                    {vinfo?.snippet?.channelTitle.length > 20
                      ? vinfo?.snippet?.title.substr(0, 20)
                      : vinfo?.snippet?.channelTitle}
                  </li>
                  <li>
                    {/* {calcViews(vinfo?.statistics?.viewCount) + " views  •  "} */}
                    {vinfo?.snippet?.publishedAt &&
                      calcTime(vinfo?.snippet?.publishedAt)}
                  </li>
                </ul>
              </div>
            </div>
        //   </Link>
        ))}
    </div>
  );
};

export default Suggestions
