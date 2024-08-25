const YouTubeVideoGrid = () => {
  const videos = [
    { id: "SC07e2SadcI", title: "Video Title 1" },
    { id: "V9KSPOtz5ms", title: "Video Title 2" },
  ];

  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="relative">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
              {video.title}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideoGrid;
