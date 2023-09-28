import { Pressable,View,Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles/colors";
import { DateStyle } from "../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({id,description,amount,Date}){
    const navigation=useNavigation();
    function onPressHandler(){
        navigation.navigate('ManageExpenses',{
            expenseid:id
        })
    }
    return <Pressable onPress={onPressHandler}>
        <View style={styles.item}>
            <View>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.date}>{DateStyle(Date)}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>{amount}</Text>
            </View>
        </View>
    </Pressable>
}

export default ExpenseItem;

const styles=StyleSheet.create({
    item:{
        backgroundColor:GlobalStyles.colors.primary500,
    borderRadius:8,
    margin:8,
    padding:6,
    flexDirection:"row",
    justifyContent:"space-between"
    },
    description:{
        color:'white',
        fontWeight:"bold",
        fontSize:18
    },
    date:{
        color:'white'
    },
    amountContainer:{
        borderRadius:6,
        
        backgroundColor:'white'
    },
    amount:{
        margin:8,
        color:GlobalStyles.colors.primary500,
        marginVertical:12,
        fontWeight:"bold"
    }
})