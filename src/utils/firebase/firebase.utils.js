import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore,doc,getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1LFY9JQsLu4s3q_z-gyHFZTfOcVw9MFY",
  authDomain: "crown-clothingstore-db.firebaseapp.com",
  projectId: "crown-clothingstore-db",
  storageBucket: "crown-clothingstore-db.appspot.com",
  messagingSenderId: "326399205258",
  appId: "1:326399205258:web:3d0b7f70bea861ae573273"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)
  
  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email, 
        createdAt
      });
    }catch(e) {
      console.log('Error creating the user: ', e.message)
    }
  }

  return userDocRef;
}
