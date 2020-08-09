import React from 'react';
import {Text} from 'react-native';

import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

export default () => {
  return (
    <ScrollableTabView
      style={{marginTop: 20}}
      initialPage={1}
      // tabBarActiveTextColor="green"
      // tabBarInactiveTextColor="red"
      tabBarUnderlineStyle={{
        borderColor: 'green',
        borderWidth: 1,
      }}
      renderTabBar={() => <DefaultTabBar />}>
      <Text
        tabLabel=""
        headerTintColor="red"
        tabStyle={{marginHorizontal: 10}}
        activeTabStyle={{marginHorizontal: 10}}>
        My
      </Text>
      <Text tabLabel="">favorite</Text>
      <Text tabLabel="">project</Text>
    </ScrollableTabView>
  );
};
