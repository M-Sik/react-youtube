import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/cards/VideoCard';
import { VideoItem } from '../types/VideoType';
// import FakeYoutube from '../api/fakeYoutube';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<VideoItem[]>(['videos', keyword], () => youtube.search(keyword || ''), {
    staleTime: 1000 * 60,
  });

  return (
    <>
      {isLoading && <p>loading...</p>}
      {error && <p>에러 발생 ㅎㅎ</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video}></VideoCard>
          ))}
        </ul>
      )}
    </>
  );
}
