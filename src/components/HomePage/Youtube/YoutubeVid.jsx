import { useQuery } from "@tanstack/react-query";
import getYouTubes from "../../../api/home/getyoutbue";

const YouTubeVideoGrid = () => {
  const { data } = useQuery({
    queryKey: ["youtubes"],
    queryFn: getYouTubes,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10, // Cache for 10 minutes
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
  });
  // console.log(data);
  return (
    <div className="mt-5 md:mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.data?.video_id?.length > 0 &&
          data.data.video_id.map((video) => (
            <div key={video._id} className="relative">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${video.video_id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
      </div>
    </div>
  );
};

export default YouTubeVideoGrid;
