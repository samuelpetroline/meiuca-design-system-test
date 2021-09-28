import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ChildrenOnlyProps } from 'types/misc'

const Layout = ({ children }: ChildrenOnlyProps): JSX.Element => {
  return (
    <SafeAreaView style={StyleSheet.absoluteFill} edges={['right', 'top', 'left']}>
      <StatusBar barStyle='default' networkActivityIndicatorVisible />
      <View style={{ flex: 1 }}>{children}</View>
    </SafeAreaView>
  )
}

export default Layout
