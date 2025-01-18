import { View } from '@dailycode/core';
import { HomeContentChat } from './home.content.chat';
import { Button } from '@dailycode/ui';

const BEFORE_START = true;

export function HomeContent() {
  if (BEFORE_START) {
    return <StartChat />;
  }
  return <HomeContentChat />;
}

function StartChat() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Button size='lg' pill>
        {'시작하기'}
      </Button>
    </View>
  );
}
