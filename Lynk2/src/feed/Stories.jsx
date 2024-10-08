import React from 'react';
import { Avatar } from '@nextui-org/react';
import './Stories.css';

const friends = [
  'Das', 'Maddy69', 'Nckxxx', 'Rudresh', 'Arun', 'Suhail', 'Chitra', 'Divya', 'Eashwar', 'Gopi',
  'Hari', 'Ishaan', 'Jay', 'Kiran', 'Lakshmi', 'Meera', 'Naveen', 'Om', 'Pooja', 'Qadir',
  'Ravi', 'Sita', 'Tina', 'Uma', 'Vikram', 'Waseem', 'Xavier', 'Yamini', 'Zara', 'Ashok',
  'Bhuvana', 'Charan', 'Devi', 'Esha', 'Farhan', 'Gayathri', 'Harish', 'Indira', 'Jeeva', 'Kalai',
  'Latha', 'Manoj', 'Neha', 'Oviya', 'Pranav', 'Ramesh', 'Santhosh', 'Trisha', 'Uday', 'Vinod',
  'Akash', 'Bhargavi', 'Chetan', 'Deepa', 'Ebin', 'Fathima', 'Gautam', 'Hemant', 'Ira', 'Jagan',
  'Kavi', 'Lavanya', 'Mani', 'Nikhil', 'Ojas', 'Pari', 'Rohit', 'Suresh', 'Tarun', 'Usha',
  'Varun', 'Wendy', 'Xena', 'Yash', 'Zaid', 'Anitha', 'Bhavesh', 'Chandru', 'Dinesh', 'Eswar',
  'Fiona', 'Giri', 'Hema', 'Imran', 'Jaya', 'Karthik', 'Lalitha', 'Mahesh', 'Nisha', 'Omi',
  'Pavan', 'Ritu', 'Sagar', 'Tejas', 'Urvashi', 'Vishal', 'Winston', 'Xavi', 'Yogesh', 'Zubin'
];

const friendsWithStories = friends.slice(0, ); 

const Stories = () => {
  return (
    <div className="stories-container">
      {friendsWithStories.map((friend, index) => (
        <div key={index} className="story">
          <Avatar 
            src={`https://i.pravatar.cc/150?u=${friend}`}
            alt={`${friend}'s story`}
          />
          <span className="friend-name">{friend}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
