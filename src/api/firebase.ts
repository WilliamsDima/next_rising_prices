import { initializeApp, FirebaseOptions, getApp, } from "firebase/app"
import { getFirestore, doc, getDoc } from "firebase/firestore/lite"
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage"

const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

function createFirebaseApp(config: FirebaseOptions) {
    try {
        return getApp()
    } catch {
        console.log('error initializeApp')
        
        return initializeApp(config)
    }
}

const app = createFirebaseApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

// export const getData = async () => {

//     const docRef = doc(db, "portfolio", 'data')
//     const docSnap = await getDoc(docRef)
//     const data = docSnap.data()

//     return data
// }

export const getChecksUrl = async () => {

    const data = ref(storage, '/checks/')

    const { items } = await listAll(data)

    const url = await getDownloadURL(items[0])
    
    
    return url
}
