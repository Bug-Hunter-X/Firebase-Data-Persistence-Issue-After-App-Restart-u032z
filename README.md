# Firebase Data Persistence Bug

This repository demonstrates a bug encountered in a Firebase project where data written to the Realtime Database using `set()` wasn't persisting across app restarts.  The problem is that while data appears to write correctly, it disappears when the application is closed and reopened.  This behavior occurs despite correctly configured security rules and authentication.

## Bug Description
The issue involves the loss of data written to the Firebase Realtime Database when the application is closed and then restarted.  The application uses Firebase authentication, but the persistent nature of the database is not being maintained across sessions. The `set()` method appeared to successfully write the data, confirmed through the Firebase console, but the data wasn't present after relaunch.

## Reproduction Steps
1. Clone this repository.
2. Install necessary packages (`npm install`)
3. Run the application.
4. Add some data through the UI.
5. Close the app.
6. Reopen the app. The data added will be missing.

## Solution
The solution involves enabling offline persistence in Firebase.  This allows the app to maintain a local copy of the data, even when the app is not actively connected to the network. See `bugSolution.js` for the corrected code.