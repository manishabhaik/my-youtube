import { calcTime, calcViews} from "../utils/helper";

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="px-2 py-3 w-80 cursor-pointer">
      <img
        className="rounded-lg hover:rounded-none"
        src={thumbnails.medium.url}
        alt="video-thumbnail"
      />
      <ul>
        <li className="font-bold py-2">
          {title.length > 70 ? title.substr(0, 70) : title}
        </li>
        <li>
          {channelTitle.length > 20 ? title.substr(0, 20) : channelTitle}
        </li>
        <li>
          {calcViews(statistics?.viewCount) + " views  •  "}
          {publishedAt && calcTime(publishedAt)}
        </li>
      </ul>
    </div>
  );
};

export const AdVideoCard = (({info})=>{
    return <div className="boder border-gray-500"><VideoCard info={info} /></div>})

export default VideoCard;
