import { StyleSheet } from 'react-native';

export const general_color = '#172135';
export const gray_color = '#878A91';
export const orange_color = '#EF7517'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: null,
        width: null,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    image_button: {
        alignSelf: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        height: 87,
        width: 301,
    },
    text_button: {
        paddingBottom: 36,
        position: 'relative',
        color: '#F2F5F8',
        fontSize: 15,
        minHeight: 21,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    text_link: {
        color: '#2679F4',
    },
    type_button: {
        top: 35,
        //left: 43,
        width: 173,
        height: 42,
        borderColor: orange_color,
        borderRadius: 5,
        borderWidth: 1,
        opacity: 1,
        backgroundColor: '#f5eee9',
    },
    type_text: {
        paddingTop: 12,
        paddingBottom: 12,
        textAlign: 'center',
        color: orange_color,
        fontSize: 12,
    },
    other_type_button: {
        top: 35,
        width: 88,
        height: 42,
        borderRadius: 5,
        //opacity: 1,
        backgroundColor: '#E9EDF2',
    },
    other_type_text: {
        paddingTop: 12,
        paddingBottom: 12,
        textAlign: 'center',
        color: gray_color,
        fontSize: 12
    },
    input: {
        width: 273,
        height: 44,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#E9EDF2',
        fontSize: 12,
        flex: 1,
    },
});
