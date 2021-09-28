import { NEWS_API_KEY } from 'react-native-dotenv'

import { NewsResponse } from 'types/response'

import { get } from 'services/http'

export function fetchNews(page = 1) {
  return get<NewsResponse>(
    `https://newsapi.org/v2/top-headlines?sources=google-news-br&page=${page}&apiKey=${NEWS_API_KEY}`,
  )
}
