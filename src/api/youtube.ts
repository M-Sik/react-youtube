import axios, { AxiosResponse } from 'axios';
import { VideoItem } from '../types/VideoType';

export default class Youtube {
  httpClient: any;
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword: string) {
    //  # 표시는 js에서 private 함수를 뜻하며 클래스 내부에서만 사용할 수 있음
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword: string) {
    return this.httpClient
      .get('/search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res: AxiosResponse<any, any>) => res.data.items)
      .then((items: VideoItem[]) =>
        items.map((item: VideoItem) => ({ ...item, id: item.id.videoId })),
      );
  }

  async #mostPopular() {
    return this.httpClient
      .get('/videos', {
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res: AxiosResponse<any, any>) => res.data.items);
  }
}
