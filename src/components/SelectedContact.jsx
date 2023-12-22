import React, { useState, useEffect } from 'react';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [singleContact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        if (selectedContactId) {
          const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
          if (!response.ok) {
            throw new Error('Failed to fetch contact');
          }
          const contactData = await response.json();
          setContact(contactData); 
        }
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };

    fetchContact();
  }, [selectedContactId]); 

  const navigateBackToList = () => {
    setSelectedContactId(null);
  };


  return (
    
    <div>
      <button onClick={navigateBackToList}>Back to Contact List</button>
    </div>
  );
};

export default SelectedContact;
