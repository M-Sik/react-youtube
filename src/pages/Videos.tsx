import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/cards/VideoCard';
import { VideoItem } from '../types/VideoType';
import FakeYoutube from '../api/fakeYoutube';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<VideoItem[]>(['videos', keyword], () => {
    const youtube = new FakeYoutube();
    return youtube.search(keyword || '');
  });

  return (
    <>
      <div>Videos {keyword ? `${keyword}` : `Videos 핫트랜드`}</div>
      {isLoading && <p>loading...</p>}
      {error && <p>에러 발생 ㅎㅎ</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video}></VideoCard>
          ))}
        </ul>
      )}
    </>
  );
}
