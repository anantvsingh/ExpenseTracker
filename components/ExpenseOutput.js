import { Text, View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

const DUMMY_DATA=[{
    id:'e1',
    description:'pair of shoes',
    amount:59.99,
    Date:new Date('2023-7-12')
},
{
    id:'e1',
    description:'pair of shoes',
    amount:59.99,
    Date:new Date('2023-7-12')
},{
    id:'e1',
    description:'pair of socks',
    amount:5.99,
    Date:new Date('2023-6-30')
},{
    id:'e1',
    description:'some bananas',
    amount:9.00,
    Date:new Date('2023-7-20')
},{
    id:'e1',
    description:'vegies',
    amount:19.99,
    Date:new Date('2023-6-10')
}]

function ExpenseOutput({expenses,periodName}){
    return (
        <View>
            <ExpenseSummary expenses={DUMMY_DATA} period={periodName}/>
            <ExpenseList expenses={DUMMY_DATA}/>
        </View>
        
    )
}
export default ExpenseOutput;