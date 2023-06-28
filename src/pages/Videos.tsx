import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/cards/VideoCard';
import { Video } from '../types/VideoType';
import axios from 'axios';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<Video[]>(['videos', keyword], async () => {
    return axios
      .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.data.items);
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
