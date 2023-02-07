/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
const App = () => {
  const [file, setFile] = useState(null);

  const pickDocument = async () => {
    try {
      const result: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFile(result);
    } catch (error) {
      console.error(error);
    }
  };
  console.log('🚀  file', file);

  const uploadFile = async (fileuUpload: any) => {
    const formData = new FormData();
    formData.append('fileuUpload', {
      uri: fileuUpload.uri,
      name: fileuUpload.name,
      type: 'text/csv',
    });

    const options = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      const response = await axios.post('your-server-url', formData, options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {file ? (
        <Button title="Upload" onPress={() => uploadFile(file)} />
      ) : (
        <Button title="Pick a CSV file" onPress={pickDocument} />
      )}
    </View>
  );
};

export default App;
