import React from "react";

type videoProps = {
  embedId: string;
};

const YoutubeEmbed = ({ embedId }: videoProps) => {
  return (
    <>
      <iframe
        width="200"
        height="100"
        src={`https://www.youtube.com/embed/${embedId}`}
        data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="video"
      />
    </>
  );
};

export default YoutubeEmbed;
