import { AxiosResponse } from 'axios';
import { VideoItem } from '../types/VideoType';

export default class Youtube {
  apiClient: any;
  constructor(apiClient: any) {
    this.apiClient = apiClient;
  }

  async search(keyword: string) {
    //  # 표시는 js에서 private 함수를 뜻하며 클래스 내부에서만 사용할 수 있음
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id: string) {
    return this.apiClient
      .channels({ params: { part: 'snippet', id: id } })
      .then(
        (res: { data: { items: VideoItem[] } }) => res.data.items[0].snippet.thumbnails.default.url,
      );
  }

  async #searchByKeyword(keyword: string) {
    return this.apiClient
      .search({
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
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res: AxiosResponse<any, any>) => res.data.items);
  }
}
