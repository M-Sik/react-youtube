import React from 'react';
import { VideoItem } from '../../types/VideoType';
import { formatAgo } from '../../util/date';

type Props = {
  video: VideoItem;
};

export default function VideoCard({ video }: Props) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li>
      <img className="w-full" src={thumbnails.medium.url} alt="title" />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
