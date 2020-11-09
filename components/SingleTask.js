import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SingleTask = (props) => {
    return (
        <TouchableOpacity onLongPress={props.onDelete}>
            <View style={styles.listItem}>
                <Text >
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 5,
        backgroundColor: '#ccc',
        borderRadius: 7
    }
});

export default SingleTask;