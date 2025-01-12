import React, { useMemo, useCallback } from 'react';
import { View } from '@dailycode/core';
import { subDays, isSameDay } from 'date-fns';
import { HomeDatePickerItem } from './home.date-picker.item';

const today = new Date();

export function HomeDatePicker() {
  const dates = useMemo(() => Array.from({ length: 7 }, (_, i) => subDays(today, 6 - i)), []);

  const onPressDate = useCallback((date: Date) => {
    console.log(date);
  }, []);

  return (
    <View className='flex-row justify-between px-4 py-2'>
      {dates.map((date) => (
        <HomeDatePickerItem
          key={date.toString()}
          date={date}
          isSelected={isSameDay(date, today)}
          onPressDate={onPressDate}
        />
      ))}
    </View>
  );
}
