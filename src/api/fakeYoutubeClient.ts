import axios from 'axios';

export default class FakeYoutubeClient {
  async search({ params }: any) {
    //  # 표시는 js에서 private 함수를 뜻하며 클래스 내부에서만 사용할 수 있음
    return params.relatedToVideoId
      ? axios.get('/videos/related.json')
      : axios.get('/videos/search.json');
  }
  async videos() {
    return axios.get('/videos/popular.json');
  }
  async channels() {
    return axios.get('/videos/channel.json');
  }
}
