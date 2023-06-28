export type VideoItem = {
  kind: string;
  etag: string;
  id: string & { videoId: string };
  snippet: {
    title: string;
    publishedAt: string;
    channelId: string;
    description: string;
    thumbnails: object;
    channelTitle: string;
    categoryId: string;
    liveBroadcastContent: string;
    localized: object;
    defaultAudioLanguage: string;
  };
};
