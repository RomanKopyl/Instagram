import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

interface StyledTextInputProps extends TextInputProps { };

const StyledTextInput: React.FC<StyledTextInputProps> = ({
  ...props
}) => {
  return (
    <TextInput
      {...props}
      autoCapitalize={'none'}
      className='border border-gray-500 p-3 rounded-md'
    />
  )
}

export default StyledTextInput