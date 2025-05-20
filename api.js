 
import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    getDoc, 
    doc, 
    query, 
    where 
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCa_LAkgKoyO1QpA_dH-ED8sK-XsIpWiRw",
  authDomain: "erfan-vanlife.firebaseapp.com",
  projectId: "erfan-vanlife",
  storageBucket: "erfan-vanlife.firebasestorage.app",
  messagingSenderId: "615864406639",
  appId: "1:615864406639:web:ee9bbdf691cfa38ccab39a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapsShot = await getDoc(docRef)
    return (
        {
            ...vanSnapsShot.data(),
            id: vanSnapsShot.id
        }
    )
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "456"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

export async function signupUser(creds) {
    
}
