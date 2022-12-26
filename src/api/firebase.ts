import firebase, { initializeApp, FirebaseOptions, getApp, } from "firebase/app"
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage"

const firebaseConfig: FirebaseOptions = {
    apiKey: 'AIzaSyCJOYuvCt3qmK3JX4zGlqW7DatXPX5vLxQ',
    authDomain: 'edds-b64b5.firebaseapp.com',
    projectId: 'edds-b64b5',
    storageBucket: 'edds-b64b5.appspot.com',
    messagingSenderId: '30614745257',
    appId: '1:30614745257:web:f0e20f880bf8a277f3f9b8',
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
const storage = getStorage(app)


export const getChecksUrl = async () => {

    const data = ref(storage, '/checks/')

    const { items } = await listAll(data)

    const url = await getDownloadURL(items[0])
    
    
    return url
}
