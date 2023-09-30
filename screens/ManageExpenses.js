import { useContext, useEffect } from "react";
import { StyleSheet, Text ,View} from "react-native"
import Button from "../UI/Button";
import { GlobalStyles } from "../constants/styles/colors";
import IconButton from "../UI/IconButton";
import { ExpenseCtx } from "../store/ExpenseContext";
function ManageExpenses({route,navigation}){
    const expenseCtx=useContext(ExpenseCtx);

    const expenseItemId=route.params?.expenseid;
    const isEditing=!!expenseItemId;

    useEffect(()=>{
        navigation.setOptions({
            title:isEditing ? 'Edit Expense':'Add Expense'
        },[navigation,isEditing])
    }
    )

    function cancelHandler(){
        navigation.goBack();
    }
    function confirmHandler(){
        if(isEditing){
            expenseCtx.updateExpense(
                expenseItemId,
                {
                description:'TEst!!!!',
                amount:45.66,
                Date:new Date('2023-9-30')
            })
            console.log('pressed')
            
        }
        else{
            expenseCtx.addExpense(
                {
                    description:'TEst',
                    amount:45.66,
                    Date:new Date('2023-5-6')
                }
            )
        }
        navigation.goBack();
    }
    function deleteHandler(){
        expenseCtx.deleteExpense(expenseItemId);
        navigation.goBack();
    }
    return (
    <View style={styles.container}><View style={styles.custom}>
    <Button onPress={cancelHandler} mode={'flat'} buttonname={"Cancel"} style={styles.button}/>
    <Button onPress={confirmHandler} buttonname={isEditing?'Update':'Add'} style={styles.button}/>
    </View>
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
    custom:{
       flexDirection:"row",
       justifyContent:'center',
       alignItems:"center"
        
    },
    button:{
        minWidth:120,
        margin:8
        
    },
    deleteContainer:{
        borderTopWidth:2,
        borderColor:GlobalStyles.colors.primary50,
        alignItems:"center",
        marginTop:16,
        paddingTop:6
    }
})