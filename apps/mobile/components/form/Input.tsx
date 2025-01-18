import { Text } from '@dailycode/core';
import { Input } from '@dailycode/ui';
import { type Control, Controller, type FieldPath, type FieldPathValue, type FieldValues } from 'react-hook-form';
import { View, type TextInput } from 'react-native';

type FormInputProps<T extends FieldValues> = {
  id: FieldPath<T>;
  control?: Control<T>;
  className?: string;
  placeholderClassName?: string;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  errorMessage?: string;
} & React.ComponentPropsWithoutRef<typeof TextInput>;

export function FormInput<T extends FieldValues>({
  id,
  control,
  className,
  placeholderClassName,
  defaultValue,
  errorMessage,
  ...props
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={id}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur, value } }) => (
        <View className='gap-1'>
          <Input
            className={className}
            placeholderClassName={placeholderClassName}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            {...props}
          />
          {errorMessage && <Text className='pl-1 text-sm text-red-600'>{errorMessage}</Text>}
        </View>
      )}
    />
  );
}
