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
        maxWidth: 273,
        maxHeight: 44,
        minHeight:44,
        minWidth:273,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#E9EDF2',
        fontSize: 14,
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#3E8CE8",
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        textAlign:'center'
      },
});
