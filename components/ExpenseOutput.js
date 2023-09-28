import { StyleSheet, Text, View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../constants/styles/colors";

const DUMMY_DATA=[{
    id:'e1',
    description:'pair of shoes',
    amount:59.99,
    Date:new Date('2023-7-12')
},
{
    id:'e2',
    description:'groceries',
    amount:59.99,
    Date:new Date('2023-7-12')
},{
    id:'e3',
    description:'pair of socks',
    amount:5.99,
    Date:new Date('2023-6-30')
},{
    id:'e4',
    description:'some bananas',
    amount:9.00,
    Date:new Date('2023-7-20')
},{
    id:'e5',
    description:'vegies',
    amount:19.99,
    Date:new Date('2023-6-10')
}]

function ExpenseOutput({expenses,periodName}){
    return (
        <View style={styles.container}>
            <ExpenseSummary expenses={DUMMY_DATA} period={periodName}/>
            <ExpenseList expenses={DUMMY_DATA}/>
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