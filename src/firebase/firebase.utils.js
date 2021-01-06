import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCv_XgFttSss7ueGb_nOH4rSkef-I_BGkQ",
    authDomain: "reactecommerce-9aad7.firebaseapp.com",
    projectId: "reactecommerce-9aad7",
    storageBucket: "reactecommerce-9aad7.appspot.com",
    messagingSenderId: "106249110047",
    appId: "1:106249110047:web:da3b51a1893b65bd4e0b2a",
    measurementId: "G-CGV2SBHP45"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    console.log('auth', userAuth)
    if (!userAuth) return;
    else {
        const userRef = firestore.doc(`users/${userAuth.uid}`)

        const snapShot = await userRef.get()
        console.log(snapShot)

        if (!snapShot.exists) {
            const { displayName, email } = userAuth;
            console.log(displayName)
            const createdAt = new Date();
            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })

            }
            catch (error) {
                console.log(error.message)
            }
        }
        return userRef;
    }


}




//firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;