import { Pressable, StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React, { useState } from 'react'
import { X } from '../../../assets/svg/Icon'
import colors from '../../../utils/colors'

interface ISearchInputProps extends TextInputProps {
  onChangeText: (text?: string) => void
}

const SearchInput: React.FC<ISearchInputProps> = (props) => {
  const [value, setValue] = useState('')
  const inputRef = React.useRef<TextInput>(null)

  const handleX = () => {
    setValue('')
    inputRef.current?.clear()
    props.onChangeText && props.onChangeText('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        ref={inputRef}
        style={styles.input}
        onChangeText={(text) => {
          setValue(text)
          props.onChangeText && props.onChangeText(text)
        }}
      />
      {value && value.length > 0 && (
        <Pressable style={styles.x} onPress={handleX}>
          <X fill={colors.black} />
        </Pressable>
      )}
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  input: {
    fontSize: 21,
    borderBottomWidth: 1,
    paddingHorizontal: 4,
    paddingVertical: 12
  },
  x: {
    position: 'absolute',
    right: 10,
  }
})