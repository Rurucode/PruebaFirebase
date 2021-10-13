// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCGoFiNB11x5RUEFsZRmnJSs0IQffFdLi8",
    authDomain: "aprendizaje-firebase.firebaseapp.com",
    projectId: "aprendizaje-firebase",
    storageBucket: "aprendizaje-firebase.appspot.com",
    messagingSenderId: "1039358143526",
    appId: "1:1039358143526:web:53123f8f35fda902904ae7"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


//   Agregar Datos

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }





//   await setDoc(doc(db, "aaaaaaaaaa", "NY"), {
//       name: "Nueva Yorks",
//       state: "NY",
//       country: "USA"
//     });





    // const docRefs = doc(db, "aaaaaaaaaa", "NY");
    // const docSnap = await getDoc(docRefs);
    // if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    // } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    // }




    // Add a new document in collection "cities"
    await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });