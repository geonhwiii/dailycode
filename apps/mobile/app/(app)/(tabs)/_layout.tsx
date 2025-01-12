import { TabsLayout } from '@/components/TabsLayout';
import { meta } from '@/constants/meta';
import { haptics } from '@/libs/haptics';
import { Icon, Pressable, View } from '@dailycode/core';
import { Tabs, useRouter } from 'expo-router';

export default function TabLayout() {
  const { navigate } = useRouter();
  return (
    <TabsLayout>
      <Tabs.Screen
        name='tab_1'
        listeners={{ tabPress: () => haptics.selectionAsync() }}
        options={{
          title: '홈',
          // header: () => <CustomHeader />,
          headerTransparent: true,
          tabBarIcon: ({ color, focused }) => <Icon.Home color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name='tab_2'
        listeners={{ tabPress: () => haptics.selectionAsync() }}
        options={{
          title: '기록',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <Icon.Compass color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name='tab_3'
        listeners={{ tabPress: () => haptics.selectionAsync() }}
        options={{
          title: 'My',
          headerRight: () => (
            <Pressable
              onPress={() => {
                haptics.impactAsync();
                // navigate({ pathname: '/setting' });
              }}
            >
              <View className='pr-5'>
                <Icon.Settings size={24} color='black' />
              </View>
            </Pressable>
          ),
          tabBarIcon: ({ color, focused }) => <Icon.UserRound color={color} size={24} />,
        }}
      />
    </TabsLayout>
  );
}