import Expenses from "./components/Expenses/Expenses";

export default App;

// javascript code: function App is actually an arrow function
// you can also write it like this(js): const App = (parameters, params) =>
function App() {
  const expenses = [
    {
      id: "e0",
      title: "Toilet Paper",
      amount: 94.02,
      date: new Date(2020, 5, 8),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2020, 2, 2) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2020, 5, 2),
    },
  ];

  return (
    <>
      <h1>Let's get started!</h1>
      <Expenses item={expenses} />
    </>
  );
}
