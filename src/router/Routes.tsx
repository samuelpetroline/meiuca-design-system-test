import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { routes } from 'utils/enums'

import NewsList from 'views/News/NewsList'

const Root = createStackNavigator()

function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        <Root.Screen name={routes.home.news.list.path} component={NewsList} />
      </Root.Navigator>
    </NavigationContainer>
  )
}

export default Routes
