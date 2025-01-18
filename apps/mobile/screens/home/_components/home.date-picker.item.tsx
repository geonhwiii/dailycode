import React, { useCallback, useMemo } from 'react';
import { Text, View, Icon, Pressable } from '@dailycode/core';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { cn } from '@dailycode/utils';

type Props = {
  date: Date;
  isSelected: boolean;
  onPressDate: (date: Date) => void;
};

export function HomeDatePickerItem({ date, isSelected, onPressDate }: Props) {
  const onPress = useCallback(() => onPressDate(date), [date, onPressDate]);
  const week = useMemo(() => format(date, 'EEE', { locale: ko }), [date]);

  return (
    <Pressable
      className={cn(
        'flex-col gap-1 justify-center items-center px-3 py-2 w-14 rounded-3xl',
        isSelected ? 'bg-black' : 'bg-gray-100',
      )}
      onPress={onPress}
    >
      <Text className={cn('text-sm', isSelected ? 'text-white' : 'text-gray-600')}>{week}</Text>
      <View>
        {isSelected ? (
          <Icon.CircleCheck className='text-white' size={20} />
        ) : (
          <Icon.CircleDashed className='text-black' size={20} />
        )}
      </View>
      <Text className={cn('text-sm', isSelected ? 'text-white' : 'text-gray-600')}>{format(date, 'd')}</Text>
    </Pressable>
  );
}
