import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles/colors";
function Input({label,InputConfigs}){
    const inputstyles=[styles.input]

    if(InputConfigs && InputConfigs.multiline){
        inputstyles.push(styles.inputMultiLine)
    }

    return <View >
        <Text style={styles.label}>{label}:</Text>
        <TextInput style={inputstyles} {...InputConfigs}/>
    </View>
}
export default Input;

const styles=StyleSheet.create({
    label:{
        color:GlobalStyles.colors.primary100,
        margin:6,
        fontSize:16,
        fontWeight:'bold'
    },
    input:{
        
        padding:8,
        backgroundColor:GlobalStyles.colors.primary100,
        color:GlobalStyles.colors.primary700,
        borderRadius:8
    },
    inputMultiLine:{
        textAlignVertical:"top",
        minHeight:100
    }
    
})