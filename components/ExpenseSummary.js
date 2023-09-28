import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles/colors";

function ExpenseSummary({expenses,period}){
    const sum=expenses.reduce((sum,expense)=>{
        return sum+expense.amount;
    },0)
    return (
        
        <View style={styles.container}>
            <Text style={styles.period}>{period}</Text>
            <Text style={styles.sum}>{sum.toFixed(2)}</Text>
        </View>
    )
}
export default ExpenseSummary;

const styles=StyleSheet.create({
    container:{
        backgroundColor:GlobalStyles.colors.primary50,
        borderRadius:8,
        padding:8,
        margin:6,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        
        
    },
    period:{
        color:GlobalStyles.colors.primary400,
        fontSize:14,
        fontWeight:"bold"
    },
    sum:{
        color:GlobalStyles.colors.primary500,
        fontSize:16,
        fontWeight:"bold"
    }
    
})