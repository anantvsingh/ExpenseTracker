import { useContext, useEffect } from "react";
import { StyleSheet, Text ,View} from "react-native"
import Button from "../UI/Button";
import { GlobalStyles } from "../constants/styles/colors";
import IconButton from "../UI/IconButton";
import { ExpenseCtx } from "../store/ExpenseContext";
import ExpenseForm from "../components/From/ExpenseForm";
function ManageExpenses({route,navigation}){
    const expenseCtx=useContext(ExpenseCtx);

    const expenseItemId=route.params?.expenseid;
    const isEditing=!!expenseItemId;

    const expenseDetail=expenseCtx.expenses.find((expense)=>expense.id === expenseItemId)

    useEffect(()=>{
        navigation.setOptions({
            title:isEditing ? 'Edit Expense':'Add Expense'
        },[navigation,isEditing])
    }
    )

    function cancelHandler(){
        navigation.goBack();
    }
    function confirmHandler(expenseData){
        if(isEditing){
            expenseCtx.updateExpense(
                expenseItemId,expenseData)
            console.log('pressed')
            
        }
        else{
            expenseCtx.addExpense(
                expenseData
            )
        }
        navigation.goBack();
    }
    function deleteHandler(){
        expenseCtx.deleteExpense(expenseItemId);
        navigation.goBack();
    }
    return (
    
    <View style={styles.container}>
    <ExpenseForm labelName={isEditing?'Update':'Add'} defaultValue={expenseDetail} onCancel={cancelHandler} onConfirm={confirmHandler}/>
    
    <View style={styles.deleteContainer}>
        <IconButton name="trash" color={GlobalStyles.colors.error500} size={30} onPress={deleteHandler}/>
    </View>
    </View>
    )
}
export default ManageExpenses;

const styles=StyleSheet.create({
    container:{
        backgroundColor:GlobalStyles.colors.primary700,
        flex:1,
        padding:24
    },
    
    
    deleteContainer:{
        borderTopWidth:2,
        borderColor:GlobalStyles.colors.primary50,
        alignItems:"center",
        marginTop:16,
        paddingTop:6
    }
})