import { useEffect, useRef, useState } from 'react';

const Transaction = ({ closeModal, addTransaction }) => {
  const modalRef = useRef(null);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');
  const [transactionType, setTransactionType] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = transactionType === 'received' ? parseFloat(amount) : -parseFloat(amount);
    const transactionDate = new Date(); // Create a new Date object for the transaction date
    addTransaction({ amount: finalAmount, category, note, date: transactionDate });
    closeModal();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex items-center justify-center'>
      <div className='bg-white p-10 rounded-lg flex flex-col items-center relative' ref={modalRef}>
        <h2 className='text-xl font-bold mb-4'>Transaction</h2>
        <button
          className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
          onClick={closeModal}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
        <div className="flex justify-evenly gap-11 mb-4">
          <button
            className="relative inline-flex justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-green-400 group-hover:from-blue-500 group-hover:to-green-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800"
            onClick={() => setTransactionType('received')}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              MONEY RECEIVED
            </span>
          </button>
          <button
            className="relative inline-flex justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            onClick={() => setTransactionType('spent')}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              MONEY SPENT
            </span>
          </button>
        </div>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label htmlFor='amount' className='mb-1'>Amount:</label>
            <input type='number' id='amount' name='amount' className='border border-gray-300 p-2 rounded' value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='category' className='mb-1'>Category:</label>
            <input type='text' id='category' name='category' className='border border-gray-300 p-2 rounded' value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='note' className='mb-1'>Note:</label>
            <input type='text' id='note' name='note' className='border border-gray-300 p-2 rounded' value={note} onChange={(e) => setNote(e.target.value)} />
          </div>
          <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Transaction;
