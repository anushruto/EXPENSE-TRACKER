
const Balance = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)*-1).toFixed(2);
  
  const balanceClass = total >= 0 
  ? 'from-green-400 to-blue-600 focus:ring-green-200 dark:focus:ring-green-800' 
  : 'from-red-400 to-red-600 focus:ring-red-200 dark:focus:ring-red-800';
  return (
    <div className='flex justify-evenly'>

    {/* income */}
    <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      <h4>Income</h4>
      <p className="money plus">+${income}</p>
      </span>
    </div>
    {/* balance */}
    <div className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br ${balanceClass} group-hover:${balanceClass.replace('focus:ring-', 'group-hover:')} hover:text-white dark:text-white focus:ring-4 focus:outline-none`}>
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        <h2>Your Balance</h2>
        <h3>${total}</h3>
      </span>
    </div>
    {/* expense */}
    <div class="relative inline-flex justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    <h4>Expense</h4>
    <p className="money minus">-${expense}</p>
    </span>
  </div>

  </div>
  );
};

export default Balance;
