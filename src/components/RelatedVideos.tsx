import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './cards/VideoCard';
import { VideoItem } from '../types/VideoType';

type Props = {
  id: string;
};

export default function RelatedVideos({ id }: Props) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['related', id], () => youtube.relatedVideos(id));

  return (
    <>
      {isLoading && <p>loading...</p>}
      {error && <p>에러 발생 ㅎㅎ</p>}
      {videos && (
        <ul className="">
          {videos.map((video: VideoItem) => (
            <VideoCard key={video.id} video={video}></VideoCard>
          ))}
        </ul>
      )}
    </>
  );
}
