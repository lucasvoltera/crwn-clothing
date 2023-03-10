import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD76tyzuLWVVoWyCIGrpqTQRfCRQxzbEQU",
    authDomain: "crwn-db-8ffc0.firebaseapp.com",
    projectId: "crwn-db-8ffc0",
    storageBucket: "crwn-db-8ffc0.appspot.com",
    messagingSenderId: "39520133574",
    appId: "1:39520133574:web:a4f6132e0f4de54ed4d2c7"
  
  };
  
export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if there's no user
    if (!userAuth)
        return

    // queryReference = current location in the database
    // querySnapshot = data
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // console.log(snapShot);

    //  if there's no snapshot
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        //  it will create data in that place.
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => {
return auth.signInWithPopup(provider);
}

export default firebase;