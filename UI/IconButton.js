import { Pressable, StyleSheet ,View} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
function IconButton({name,size,color,onPress}){
    return (
        <Pressable onPress={onPress} android_ripple={{color:'#becee6'}}>
            <View style={styles.container}>
                <Icon name={name} size={size} color={color}></Icon>
            </View>
        </Pressable>
    )
}

export default IconButton;

const styles=StyleSheet.create({
    container:{
        margin:8,
        padding:6,
        borderRadius:24
    }
})