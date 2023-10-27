import { Text } from "react-native"
import ExpenseOutput from "../components/ExpenseOutput";
import { ExpenseCtx } from "../store/ExpenseContext";
import { useContext } from "react";
function AllExpenses(){
    const expenseCtx=useContext(ExpenseCtx)

    return <ExpenseOutput expenses={expenseCtx.expenses} periodName={"All"}/>
}
export default AllExpenses;