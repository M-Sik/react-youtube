import { ReactNode, createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';

const client = new YoutubeClient();

export const YoutubeApiContext = createContext({ youtube: new Youtube(client) });

export function YoutubeApiProvider({ children }: { children: ReactNode }) {
  const youtube = new Youtube(client);
  // const youtube = new FakeYoutube();
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
