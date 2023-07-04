import React from 'react';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

type Props = {
  id: string;
  name: string;
};

export default function ChannelInfoCard({ id, name }: Props) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(['channel', id], () => youtube.channelImageURL(id));

  return (
    <div className="flex my-4 mb-8 items-center gap-4">
      {url && <img src={url} alt={name} className="w-10 h-10 rounded-full"></img>}
      <p className="text-lg font-bold">{name}</p>
    </div>
  );
}
