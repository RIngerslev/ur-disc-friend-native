import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import TabBar from '@/components/TabBar';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chooser'
        }}
      />
      <Tabs.Screen
        name="dice"
        options={{
          title: 'Dice'
        }}
      />
      <Tabs.Screen
        name="flip"
        options={{
          title: 'Flip'
        }}
      />
    </Tabs>
  );
}
