import { FlatList,View,Text } from "react-native";

function ExpenseList({expenses}){
    function renderExpense(itemData){
        return (
            <View>
                <Text>{itemData.item.description}</Text>
            </View>
        )
    }
    return (
        <FlatList data={expenses} keyExtractor={(item)=>item.id} renderItem={renderExpense}/>
    )
}
export default ExpenseList;