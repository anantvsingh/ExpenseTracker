import { Alert, StyleSheet, View } from "react-native";
import Input from "./InputTile";
import { useState } from "react";
import Button from "../../UI/Button";

function ExpenseForm({onCancel,onConfirm,labelName,defaultValue}){

    const[inputValues,setInputValues]=useState({
        amount:defaultValue? defaultValue.amount.toString():'',
        date:'',
        description:defaultValue? defaultValue.description : ''
    })

    function inputHandler(inputType,value){
        setInputValues((currValue)=>{
            return {
                ...currValue,
                [inputType]:value
            }
        })
    }

    function submitHandler(){
        const expenseData={
            amount:+inputValues.amount,
            date:new Date(inputValues.date),
            description:inputValues.description
        }

        //validation
        const amountIsValid= !isNaN(expenseData.amount) && expenseData.amount>0
        const dateIsValid=expenseData.date.toString !== 'Invalid Date';
        const descriptionIsValid=expenseData.description.trim().length>0

        if(!amountIsValid || !dateIsValid || !descriptionIsValid){
            Alert.alert("Invalid Inputs",'please check your values')
            return;
        }
        onConfirm(expenseData)
    }
    return <View style={styles.container}>
    <View style={styles.rowInput}>
        <Input label="Amount" InputConfigs={{
        keyboardType:'decimal-pad',
        value:inputValues.amount,
        onChangeText:inputHandler.bind(this,'amount')
        }}/>
        <Input label="Date" InputConfigs={{
        placeholder:'YYYY-MM-DD',
        maxLength:10,
        value:inputValues.date,
        onChangeText:inputHandler.bind(this,'date')
        }}/>
    </View>
    
    
    <Input label="Decription" InputConfigs={{
        multiline:true,
        onChangeText:inputHandler.bind(this,'description'),
        value:inputValues.description
        }}  />

<View style={styles.custom}>
<Button onPress={onCancel} mode={'flat'} buttonname={"Cancel"} style={styles.button}/>
    <Button onPress={submitHandler} buttonname={labelName} style={styles.button}/>
    </View>
    </View>
}
export default ExpenseForm;

const styles=StyleSheet.create({
    container:{
       
        marginBottom:20
    },
    rowInput:{
        flexDirection:'row',
        justifyContent:"space-evenly"
    },
    button:{
        minWidth:120,
        margin:8
        
    },
    custom:{
        flexDirection:"row",
        justifyContent:'center',
        alignItems:"center"
         
     },
})