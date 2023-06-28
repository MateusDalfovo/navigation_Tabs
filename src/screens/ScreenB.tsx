import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ScreenB() {
  
    const navigation = useNavigation();

    function openScreen(){
      navigation.navigate('screenA')
    }

    return (
    <View style={styles.container}>
            <Button
              title='Voltar para Tela A'
              onPress={openScreen}
              color='#000'
            />       
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
    }
})

export default ScreenB;