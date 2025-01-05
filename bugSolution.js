// bugSolution.js

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, get, onDisconnect } from 'firebase/database';
// ... other imports

// Initialize Firebase (ensure correct configuration)
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Enable offline persistence
getDatabase(app, { persistence: 'local' }); // Added Persistence

// ... rest of your Firebase code, with set() for writing

// Example usage
const dbRef = ref(db, 'path/to/data');

set(dbRef, { message: 'Hello World' }).then(() => {
  console.log('Data written successfully');
}).catch((error) => {
  console.error('Error writing data:', error);
});

// Listen to changes even when offline
onValue(dbRef, (snapshot) => {
  console.log('Data received:', snapshot.val());
});

//onDisconnect(ref(db,'path/to/data'),()=>{
//  set(ref(db, 'path/to/data'), null);
//})