import { AOS_TAB_BAR_HEIGHT, AOS_TAB_BAR_PADDING_BOTTOM } from '@/constants/size';
import type { Children } from '@/types/utils';
import { BlurView } from '@dailycode/core';
import { Tabs } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';

export function TabsLayout({ children }: Children) {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#333',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
          paddingHorizontal: 4,
        },
        headerStyle: {
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          position: 'absolute',
          overflow: 'hidden',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderColor: '#eee',
          ...Platform.select({
            android: {
              height: AOS_TAB_BAR_HEIGHT,
              paddingBottom: AOS_TAB_BAR_PADDING_BOTTOM,
            },
          }),
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: 600,
        },
        tabBarBackground: () =>
          Platform.OS === 'ios' ? (
            <BlurView
              intensity={80}
              experimentalBlurMethod='dimezisBlurView'
              style={{
                ...StyleSheet.absoluteFillObject,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                overflow: 'hidden',
                backgroundColor: 'transparent',
              }}
            />
          ) : null,
      }}
    >
      {children}
    </Tabs>
  );
}
