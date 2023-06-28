import axios from 'axios';
import { VideoItem } from '../types/VideoType';

export default class FakeYoutube {
  constructor() {}

  async search(keyword: string) {
    //  # 표시는 js에서 private 함수를 뜻하며 클래스 내부에서만 사용할 수 있음
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }

  async #searchByKeyword() {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item: VideoItem) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
