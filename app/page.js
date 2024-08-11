'use client';
import { useState } from 'react';
import Balance from './components/Balance';
import Footer from './components/Footer';
import Header from './components/Header';
import TransactionList from './components/TransactionList';


const Page = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <Header addTransaction={addTransaction} />
      <Balance transactions={transactions} />
      <TransactionList transactions={transactions} />
      <Footer />

    </div>
  );
};

export default Page;
