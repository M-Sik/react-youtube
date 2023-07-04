import React from 'react';
import { useLocation } from 'react-router-dom';
import { VideoItem } from '../types/VideoType';
import ChannelInfoCard from '../components/cards/ChannelInfoCard';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  }: { state: { video: VideoItem } } = useLocation();
  console.log(video);
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          title="video"
        ></iframe>
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfoCard id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-line">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
