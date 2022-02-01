import React from 'react';

import EntryList from './EntryList';
import InputForm from './InputForm';
import LoginPage from './LoginPage';
import NavBar from './NavBar';
import Statistics from './Statistics';

const UserPage = () => {
  return (
            <div className='userPage'>
                <div className='userCardContainer'>
                    <InputForm />
                    
                </div>
                <EntryList />
                <Statistics />
            </div>
    );
};

export default UserPage;