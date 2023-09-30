import { createContext, useReducer } from "react";


const DUMMY_DATA=[{
    id:'e1',
    description:'pair of shoes',
    amount:59.99,
    Date:new Date('2023-9-26')
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
    Date:new Date('2023-9-25')
},{
    id:'e5',
    description:'vegies',
    amount:19.99,
    Date:new Date('2023-6-10')
},
{
    id:'e6',
    description:'vegies',
    amount:19.99,
    Date:new Date('2023-9-29')
}]


export const ExpenseCtx=createContext({
    id:()=>{},
    addExpense:({description,amount,Date})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id,{description,amount,Date})=>{}
});

function expenseReducer(state,action){
    switch(action.type){
        case 'ADD':
            const id=new Date().toString()+Math.random().toString
            return [{...action.payload,id:id},...state]

        case 'DELETE':
            const updatableExpenseIndex=state.findIndex(
                (expense)=>expense.id===action.payload.id)
            const updatableExpense=state[updatableExpenseIndex]
            const updateItem=[...updatableExpense,action.payload.data]
            
            const updatedExpenses=[...state]
            updatableExpense[updatableExpenseIndex]=updateItem
            return updatedExpenses;

        case 'UPDATE':
            return state.filter((expense)=>expense.id!==action.payload)
        default:
            return state;
    }
}

function ExpenseContextProvider({children}){
    const[expenseState,dispatch]=useReducer(expenseReducer,DUMMY_DATA);
    
    function addExpense(expenseData){
        dispatch({type:'ADD',payload:expenseData})
    }

    function deleteExpense(id){
        dispatch({type:'DELETE',payload:id})
    }

    function updateExpense(id,expenseData){
        dispatch({type:'UPDATE',payload:{id:id,data:expenseData}})
    }

    const value={
        expense:expenseState,
        addExpense:addExpense,
        deleteExpense:deleteExpense,
        updateExpense:updateExpense
    }
    return <ExpenseCtx.Provider value={value}>{children}</ExpenseCtx.Provider>
}
export default ExpenseContextProvider;