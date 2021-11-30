import ExpenseItem from "./ExpenseItem";
import './Expense.css';

function Expense(props){

    const expenseItems = props.expenses.map(expense => {
        return <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount}></ExpenseItem>
    }
    );
    
    return(
        <div className="expenses">
            {expenseItems}
        </div>
    );
}

export default Expense;