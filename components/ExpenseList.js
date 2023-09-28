import { FlatList,View,Text } from "react-native";
import ExpenseItem from "./ExpenseItem";
function ExpenseList({expenses}){
    function renderExpense(itemData){
        return (
            <ExpenseItem {...itemData.item}/>
        )
    }
    return (
        <FlatList data={expenses} keyExtractor={(item)=>item.id} renderItem={renderExpense}/>
    )
}
export default ExpenseList;