import React from 'react';
import { useYoutubeApi } from '../../context/YoutubeApiContext';

type Props = {
  id: string;
  name: string;
};

export default function ChannelInfoCard({ id, name }: Props) {
  const { youtube } = useYoutubeApi();

  return <div>{name}</div>;
}
