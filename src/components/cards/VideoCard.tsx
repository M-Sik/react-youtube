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
      <img src={thumbnails.medium.url} alt="title" />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
