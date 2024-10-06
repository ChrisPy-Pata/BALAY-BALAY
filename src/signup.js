// // Signup.js
// import './Signup.css';
// import React, { useState } from 'react';
// // import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './firebaseConfig';
// import mainimage from './image2.png';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('');

//   //Handle Firebase signup
//   const handleSignup = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       console.log('User signed up:', userCredential.user);
//     } catch (error) {
//       console.error('Signup error:', error.message);
//     }
//   };

//   // Handle user type selection
//   const handleUserTypeChange = (type) => {
//     setUserType(type);
//   };

//   // Handle continue button click
//   const handleContinue = () => {
//     if (!userType) {
//       alert('Please select a user type!');
//       return;
//     }

//     // Call the signup function after validation
//     handleSignup();
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-image">
//         <img src={mainimage} alt="Signup Visual" />
//       </div>
//       <div className="signup-form">
//         <h1>Welcome!</h1>
//         <p>Lorem Ipsum</p>
//         <h3>Sign up as:</h3>
//         <div className="user-type-options">
//           <div 
//             className={`user-type-card ${userType === 'Dorm Manager' ? 'selected' : ''}`} 
//             onClick={() => handleUserTypeChange('Dorm Manager')}
//           >
//             <h4>Dorm Manager</h4>
//             <p>Lorem ipsum dolor sit amet.</p>
//           </div>
//           <div 
//             className={`user-type-card ${userType === 'Dormer' ? 'selected' : ''}`} 
//             onClick={() => handleUserTypeChange('Dormer')}
//           >
//             <h4>Dormer</h4>
//             <p>Lorem ipsum dolor sit amet.</p>
//           </div>
//         </div>
        
//         {/* Information text moved outside the cards */}
//         <p className="info-text">Manage the dormitory, oversee residents, and ensure a safe living environment.</p>
//         <p className="info-text">Live in the dormitory, participate in community activities, and enjoy a vibrant student life.</p>
        
//         <button className="continue-btn" onClick={handleContinue}>
//           Continue
//         </button>
//         <p>Already have an account? <a href="/login">Log in</a></p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// Signup.js
import './Signup.css';
import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import mainimage from './image2.png';

const Signup = () => {
  const [userType, setUserType] = useState('');

  // Handle user type selection
  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  // Handle continue button click
  const handleContinue = () => {
    if (!userType) {
      alert('Please select a user type!');
      return;
    }

    // Call the signup function after validation
    console.log('Selected user type:', userType);
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={mainimage} alt="Signup Visual" />
      </div>
      <div className="signup-form">
        <h1>Welcome!</h1>
        <p>Lorem Ipsum</p>
        <h3>Sign up as:</h3>
        <div className="user-type-options">
          <div 
            className={`user-type-card ${userType === 'Dorm Manager' ? 'selected' : ''}`} 
            onClick={() => handleUserTypeChange('Dorm Manager')}
          >
            <h4>Dorm Manager</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div 
            className={`user-type-card ${userType === 'Dormer' ? 'selected' : ''}`} 
            onClick={() => handleUserTypeChange('Dormer')}
          >
            <h4>Dormer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        
        {/* Information text */}
        <div className="info-container">
          {userType === 'Dorm Manager' && (
            <p className="info-text">Manage the dormitory.</p>
          )}
          {userType === 'Dormer' && (
            <p className="info-text">Live in the dormitory.</p>
          )}
        </div>
        
        <button className="continue-btn" onClick={handleContinue}>
          Continue
        </button>
        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
};

export default Signup;
