import React from 'react';
import { useLocation } from 'react-router-dom';
import { VideoItem } from '../types/VideoType';

export default function VideoDetail() {
  const {
    state: { video },
  }: { state: { video: VideoItem } } = useLocation();
  console.log(video);

  return <div>VideoDetail</div>;
}
