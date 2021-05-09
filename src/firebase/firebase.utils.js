import firebase from 'firebase/app'; 
import 'firebase/firestore';  
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDV8EIBtKYA1fCqOndSaM4jJ_W4ECXCOaY",
    authDomain: "react-ztm-ecommerce.firebaseapp.com",
    projectId: "react-ztm-ecommerce",
    storageBucket: "react-ztm-ecommerce.appspot.com",
    messagingSenderId: "686425701383",
    appId: "1:686425701383:web:f825b5a4896ded18e27ea2",
    measurementId: "G-JRNL95ZQWC"
  };

  export const createUserProfileDocument = async (userAuthObj, otherData) => {
    if(!userAuthObj) return;
    const userRef = firestore.doc(`users/${userAuthObj.uid}`); 
    const userSnapShot = await userRef.get(); 
    
    if(!userSnapShot.exists) {
      const { uid, displayName, email } = userAuthObj; 
      const accountCreationDate = new Date(); 

      try {
       await userRef.set({
          authID: uid, 
          displayName,
          email, 
          accountCreationDate, 
          ...otherData
        });
        console.log(`User ${displayName} added to database.`) 
      } catch(err) {
        console.log(`Something went wrong, error creating user. 
                    ${err.message}`
                    ); 
      }   
    }; 
    return userRef; 
  } 

firebase.initializeApp(config); 

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 


const provider = new firebase.auth.GoogleAuthProvider();  
provider.setCustomParameters({ prompt: 'select_account' }); 
export const signInWithGoogle = () => auth.signInWithPopup(provider); 
export default firebase; 
