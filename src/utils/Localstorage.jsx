let datacollect = null;

export const setUserData = (data) => {
  datacollect = data;
};

export const getUserData = () => datacollect;








// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const Localstorage = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/getdata')
//       .then(response => {
//         setEmployees(response.data);
//         // Save to localStorage
//         localStorage.setItem('employees', JSON.stringify(response.data));
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Employee Array:</h2>
//       <pre>{JSON.stringify(employees, null, 2)}</pre>
//     </div>
//   );
// }

// export default Localstorage;
