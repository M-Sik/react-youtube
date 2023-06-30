import React from 'react';

type Props = {
  id: string;
  name: string;
};

export default function ChannelInfoCard({ id, name }: Props) {
  return <div>{name}</div>;
}
