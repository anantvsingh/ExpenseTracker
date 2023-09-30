import { StyleSheet, Text, View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../constants/styles/colors";


function ExpenseOutput({expenses,periodName}){

    return (
        <View style={styles.container}>
            <ExpenseSummary expenses={expenses} period={periodName}/>
            <ExpenseList expenses={expenses}/>
        </View>
        
    )
}
export default ExpenseOutput;

const styles=StyleSheet.create({
    container:{
        backgroundColor:GlobalStyles.colors.primary700,
        flex:1
    }
})