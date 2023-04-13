import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmFnKsp5FNphY4-1l4tshGRt8B3alc7fw",
  authDomain: "california-bg.firebaseapp.com",
  projectId: "california-bg",
  storageBucket: "california-bg.appspot.com",
  messagingSenderId: "75703858032",
  appId: "1:75703858032:web:08bec7112e3a0aa195d5b5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItems(){
  const productsRef = collection(db, "products")
  const productsSnapshot = await getDocs(productsRef)
  const documents = productsSnapshot.docs

  const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data() }
  })
  
  return docsData
}

export async function getSingleItem(id){
    const docRef = doc(db, "products", id)
    const docSnapshot = await getDoc(docRef)
    
    return { id: docSnapshot.id, ...docSnapshot.data()}
}

export async function getCategoria(categoriaid){
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("categoria", "==", categoriaid))
    const productsSnapshot = await getDocs(q)
    const documents = productsSnapshot.docs

    const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data() }
  })
  
  return docsData
}