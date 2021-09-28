import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useInfiniteQuery } from 'react-query'

import { fetchNews } from 'services/news'

import AsyncData from 'components/AsyncData'
import Card from 'components/Card'

import { NewsListContainer, NewsListSuccessItem } from './NewsListStyles'

export default function NewsList(): JSX.Element {
  const queryInfo = useInfiniteQuery('news', async ({ pageParam }) => {
    const res = await fetchNews(pageParam)

    return res.data
  })

  return (
    <NewsListContainer>
      <AsyncData {...queryInfo}>
        <AsyncData.Loading>
          <ActivityIndicator />
        </AsyncData.Loading>
        <AsyncData.Success>
          {results => {
            const data = results.pages.reduce((prev, next) => prev.concat(next.articles), [])

            return (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={item => item.title}
                onEndReached={() => queryInfo.fetchNextPage()}
                renderItem={({ item }) => (
                  <NewsListSuccessItem>
                    <Card
                      key={item.title}
                      title={item.title}
                      subtitle={item.description}
                      description={item.content}
                      onPress={alert}
                    />
                  </NewsListSuccessItem>
                )}
              />
            )
          }}
        </AsyncData.Success>
      </AsyncData>
    </NewsListContainer>
  )
}
