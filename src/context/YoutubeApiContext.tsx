import { ReactNode, createContext, useContext } from 'react';
import Youtube from '../api/youtube';

export const YoutubeApiContext = createContext({ youtube: new Youtube() });

export function YoutubeApiProvider({ children }: { children: ReactNode }) {
  const youtube = new Youtube();
  // const youtube = new FakeYoutube();
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
