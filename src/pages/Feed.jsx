import { useContext } from "react";
import SideNav from "../components/SideNav";
import { YoutubeContext } from "../context/YoutubeContext";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";
const Feed = () => {
  const { videos } = useContext(YoutubeContext);

  console.log(videos);
  return (
    <div className="flex min-h-[100vh] bg-[#0F0F0F] text-white">
      <SideNav />
      <div className="videos w-full">
        {!videos ? (
          <Loading />
        ) : (
          videos.map((item) => {
            if (item.type !== "video") return;

            return <VideoCard key={item.video.videoId} video={item.video} />;
          })
        )}
      </div>
    </div>
  );
};

export default Feed;
