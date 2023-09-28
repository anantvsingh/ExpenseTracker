import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles/colors";

function Button({buttonname,onPress,mode,style}){
    return <View style={style}>
        <Pressable onPress={onPress} android_ripple={{color:'#d7cbcb'}}>
            <View style={[styles.container,mode==='flat' && styles.flat]}>
                <Text style={[styles.text,mode==='flat' && styles.flatText]}>{buttonname}</Text>
            </View>
        </Pressable>
    </View>
}
export default Button;

const styles=StyleSheet.create({
    container:{
        
        padding:8,
        alignItems:"center",
        backgroundColor:GlobalStyles.colors.primary400,
        borderRadius:4,
        
        

    },
    flat:{
        backgroundColor:'transparent'
    },
    flatText:{
        color:GlobalStyles.colors.primary200

    },
    text:{
        color:'white'
    },
    pressed:{
        opacity:0.25
    }
})