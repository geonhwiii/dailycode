import { Chat } from '@/components/chat';
import { ScrollView, View } from '@dailycode/core';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export function HomeContent() {
  const height = useBottomTabBarHeight();
  return (
    <ScrollView className='gap-8 p-5' contentContainerStyle={{ paddingBottom: height }}>
      {mock.map(({ id, question, answer }) => (
        <View key={id} className='gap-5'>
          <Chat.Question question={question} />
          <Chat.Answer answer={answer} />
        </View>
      ))}
    </ScrollView>
  );
}

const mock = [
  {
    id: 1,
    question: 'localStorage와 sessionStorage의 차이점에 대해서 설명해주세요.',
    answer:
      'localStorage: 텍스트 데이터를 저장하고 응용에 접근하는 수 있습니다. sessionStorage: 텍스트 데이터를 저장하고 응용에 접근하는 수 있습니다.',
  },
  {
    id: 2,
    question: 'localStorage와 sessionStorage를 사용했을때 발생하는 보안 문제는 어떻게 해결할 수 있나요?',
    answer:
      'localStorage와 sessionStorage 둘다 보안 관점에서는 주의가 필요합니다. localStorage에 민감한 데이터를 저장하면 영구적으로 유지되므로 보안 위험이 큽니다. 바닥로, sessionStorage는 세션 종료 시 데이터가 자동 삭제되기 때문에 민감한 데이터를 임시 저장하는 데 더 적합하지만 여전히 보안적인 문제는 남아있습니다.',
  },
  {
    id: 3,
    question: '스토리지를 사용했을때 발생하는 보안 문제는 어떻게 해결할 수 있나요?',
    answer: `브라우저 저장소는 데이터를 암호화하거나 보호할 방법이 기본적으로 제공되지 않기 때문에 민감한 데이터를 직접 저장하지 않는 것이 가장 중요입니다.
그러므로 가장 직관적인 방법은 민감한 데이터는 스토리지에 저장하지 않는 것입니다.
인증 토큰이나 사용자 비밀번호는 localStorage 또는 sessionStorage에 저장하지 않고, HTTP-Only 쿠키를 사용합니다. 이렇게 하면 자바크스립트에서 접근할 수 없으므로 XSS 공격에 대한 위험을 줄일 수 있습니다.`,
  },
];
