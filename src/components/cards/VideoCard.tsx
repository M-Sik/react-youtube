import React from 'react';
import { VideoItem } from '../../types/VideoType';

type Props = {
  video: VideoItem;
};

export default function VideoCard({ video }: Props) {
  return <div>{video.snippet.title}</div>;
}
