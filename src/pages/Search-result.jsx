import React, { useEffect, useState } from 'react'
import NavbarWithSearch from '../compnenets/NavbarWithSearch'
import { useLocation } from 'react-router-dom'
import { userData } from '../user-data'
import Card from '../compnenets/Card'
import { X } from 'lucide-react';
import EmptyResult from '../compnenets/EmptyResult'

const DialogBox = ({ onClose, user }) => (
  <div className="fixed inset-0 bg-[#FFFFFF99] bg-opacity-50 flex items-center justify-center z-30">
    <div
      className="bg-white w-[512px] rounded-lg shadow-lg p-6 space-y-4"
      style={{
        boxShadow: '0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Fetch Details</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <p className="text-sm text-gray-600">Here are the details of following employee:</p>
      <div className="space-y-2">
        <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
        <p><strong>Location:</strong> {user.city}</p>
        <p><strong>Contact Number:</strong> {user.contact_number}</p>
      </div>
      <div className="w-full h-48 bg-gray-200 rounded-md">
        <img src="https://s3-alpha-sig.figma.com/img/a678/aed9/e259b9de82f3f0845448634759bf6f1f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYcPANwMRq5AVmZKggczoNJfXx67q4fD51PtPWSGltMF0LDUUZ3C1vGPa~wMuwdd7WpnLm7auBjacwWHbwIzg6HwVlTX3I8zxE9b50nhlw7dAjUI4dwM9mNvod4QAEG5hcUL73VqTGHIqBUucIfCnD2vHR50cm7-ymvXtwJIk2j5dy9rU5rkLWhPWPKtHlDUni~wWYxxL~sqg5ea425j~HL2UXILw8iNd0Ggww6PMqwtB-8vPjobfeaShjT~I3gh8c1oGZ4vGySra4smPi98soMVMLPCaar0F1Ft~LRZslNQMQ2G7~yJWF9C8dayN1XtBmYgh2uhnUsfn18T~1vmjQ__" alt={`${user.first_name} ${user.last_name}`} className="w-full h-full object-cover rounded-md" />
      </div>
      <button
        onClick={onClose}
        className="w-full py-2 bg-gray-200 text-sm font-medium rounded-md hover:bg-gray-300"
      >
        Close
      </button>
    </div>
  </div>
);

const SearchResultPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const location = useLocation();
  const [filteredUser, setFilteredUser] = useState([]);

  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('query'); 

  useEffect(() => {
    const filterUser = userData.filter((user) => user.first_name.toLowerCase() === name.toLowerCase());
    setFilteredUser(filterUser);
  }, [name]);

  const handleFetchDetails = (user) => {
    setSelectedUser(user);
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setSelectedUser(null);
  };

  return (
    <>
      <NavbarWithSearch  filteredUser={filteredUser} setFilteredUser={setFilteredUser}/>
      <main className='flex justify-center items-center h-screen relative bg-[#B1CBFF]/30'>
       {
        !(filteredUser.length===0)?( <div className='w-[1074px] absolute top-8 mx-auto bg-transparent z-10 h-screen'>
          <div className='grid grid-cols-3 gap-4'>
            {filteredUser && filteredUser.length > 0 && filteredUser.map((user, index) => (
              <Card
                key={index}
                firstName={user.first_name}
                lastName={user.last_name}
                city={user.city}
                contactNumber={user.contact_number}
                avatar={user.avatar}
                onFetchDetails={() => handleFetchDetails(user)}
              />
            ))}
          </div>
        </div>):(<><div className='h-screen relative bg-[#B1CBFF]/30'><EmptyResult/></div></>)
       }
        {showDialog && selectedUser && <DialogBox onClose={handleCloseDialog} user={selectedUser} />}
      </main>
    </>
  )
}

export default SearchResultPage