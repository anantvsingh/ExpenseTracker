import { Text, View } from "react-native";

function ExpenseSummary({expenses,period}){
    const sum=expenses.reduce((sum,expense)=>{
        return sum+expense.amount;
    },0)
    return (
        
        <View>
            <Text>{period}</Text>
            <Text>{sum.toFixed(2)}</Text>
        </View>
    )
}
export default ExpenseSummary;