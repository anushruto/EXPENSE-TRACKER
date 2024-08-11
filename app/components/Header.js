'use client';
import { useState } from 'react';
import Transaction from './Transaction';

const Header = ({ addTransaction }) => {
  const [showTransaction, setShowTransaction] = useState(false);

  const openModal = () => {
    setShowTransaction(true);
  };

  const closeModal = () => {
    setShowTransaction(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">EXPENSE TRACKER</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            onClick={openModal}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              NEW TRANSACTION
            </span>
          </button>
        </div>
        {showTransaction && <Transaction closeModal={closeModal} addTransaction={addTransaction} />}
      </div>
      <hr />
    </div>
  );
};

export default Header;
