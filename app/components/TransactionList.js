const TransactionList = ({ transactions = [] }) => {
  // Sort transactions based on the date (latest first)
  const sortedTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4'>Transaction List</h2>
      <ul className='space-y-4'>
        {sortedTransactions.map((transaction, index) => {
          // Use the date and time from the transaction data
          const date = new Date(transaction.date);
          const formattedDate = date.toLocaleDateString();
          const formattedTime = date.toLocaleTimeString();

          const amountClass = transaction.amount >= 0 
            ? 'from-green-400 to-blue-600 focus:ring-green-200 dark:focus:ring-green-800' 
            : 'from-red-400 to-red-600 focus:ring-red-200 dark:focus:ring-red-800';

          return (
            <li key={index} className={`p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br ${amountClass} group-hover:${amountClass.replace('focus:ring-', 'group-hover:')} hover:text-white dark:text-white focus:ring-4 focus:outline-none`}>
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 block">
                <div className='flex justify-between'>
                  <span className='font-medium'>Amount:</span>
                  <span>{transaction.amount}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='font-medium'>Category:</span>
                  <span>{transaction.category}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='font-medium'>Note:</span>
                  <span>{transaction.note}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='font-medium'>Date:</span>
                  <span>{formattedDate}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='font-medium'>Time:</span>
                  <span>{formattedTime}</span>
                </div>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
