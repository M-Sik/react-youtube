import React from 'react';
import { Video } from '../../types/VideoType';

type Props = {
  video: Video;
};

export default function VideoCard({ video }: Props) {
  return <div>{video.snippet.title}</div>;
}
