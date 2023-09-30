import { Text } from "react-native"
import ExpenseOutput from "../components/ExpenseOutput";
import { useContext } from "react";
import { ExpenseCtx } from "../store/ExpenseContext";
import { recentdate } from "../util/date";
function RecentExpenses(){
    const expenseCtx=useContext(ExpenseCtx);

    const recentExpense=expenseCtx.expense.filter((expense)=>{
        const today=new Date();
        const last7days=recentdate(today,7);
        return expense.Date>last7days;
    })
    return <ExpenseOutput expenses={recentExpense} periodName={'pichle 7 din'}/>
}
export default RecentExpenses;