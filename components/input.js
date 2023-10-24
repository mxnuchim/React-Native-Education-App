import { Text, TextInput, View } from 'react-native';
import React from 'react';

const Input = ({ label, placeholder, last = false, Icon }) => {
  return (
    <View
      className={`flex flex-col gap-2 relative w-full ${last ? '' : 'mb-5'}`}
    >
      <Text className="font-exo font-semibold text-darkGrayText text-base">
        {label}
      </Text>
      <View className="flex flex-row items-center justify-between px-4 bg-white h-12 rounded-lg shadow">
        <TextInput
          className="font-exo flex text-darkGrayText text-sm h-full w-full bg-white rounded-lg"
          placeholder={placeholder}
        />
        {Boolean(Icon) ? (
          <Icon
            className="text-lightGrayText absolute right-0 mr-4"
            size={20}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Input;