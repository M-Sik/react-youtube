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
    <div>
      {url && <img src={url} alt={name}></img>}
      <p>{name}</p>
    </div>
  );
}