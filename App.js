import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,SafeAreaView  } from 'react-native';
import tailwind from 'tailwind-rn';




export default function App() {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={[tailwind('h-full'), {padding: 50}]}>
    <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
      
      <TextInput style={tailwind('text-blue-800 font-semibold')}  placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}/>
    </View>

</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
  },
  allInput: {
    borderColor:"#dfe3e9",
    borderEndColor:"#dfe3e9"
  }
});
