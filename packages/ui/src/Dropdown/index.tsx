import { Pressable, Text, View, Icon, BottomSheetModal } from '@dailycode/core';
import { cn } from '@dailycode/utils';
import { TouchableView } from '../TouchableView';
import { useBottomSheet } from './useBottomSheet';

type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownProps = {
  placeholder?: string;
  value?: string;
  options: DropdownOption[];
  disabled?: boolean;
  onChange?: (value: string) => void;
};

export function Dropdown({ disabled, value, options, placeholder = '선택', onChange }: DropdownProps) {
  const { ref, open, close } = useBottomSheet();

  const name = options?.find((option) => option.value === value)?.label;

  const onSelect = (v: string) => {
    onChange?.(v);
    close();
  };

  return (
    <View>
      <Pressable
        disabled={disabled}
        className={cn('p-4 bg-gray-50 rounded-xl border border-gray-100', {
          'bg-white border-gray-400': !!name,
        })}
        onPress={open}
      >
        <View className='flex-row justify-between items-center'>
          <Text
            className={cn('text-lg text-gray-600', {
              'font-medium text-gray-900': !!name,
            })}
          >
            {name || placeholder}
          </Text>
          <Icon.ChevronDown
            className={cn({
              'text-gray-400': !name,
              'text-gray-700': !!name,
            })}
          />
        </View>
      </Pressable>
      <BottomSheetModal ref={ref} snapPoint='40%' enableContentPanningGesture={false}>
        {options?.map(({ label, value }) => (
          <TouchableView key={value} classNames={{ inner: 'py-4' }} onPress={() => onSelect(value)}>
            <Text className='text-lg text-gray-900'>{label}</Text>
          </TouchableView>
        ))}
      </BottomSheetModal>
    </View>
  );
}
