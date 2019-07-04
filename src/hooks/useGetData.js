import { useState, useEffect } from 'react';
import firebase from 'firebase';

const api = 'https://us-central1-gndx-cv.cloudfunctions.net/me';
const firebaseConfig = {
  apiKey: "AIzaSyB7JR0y3RYI--acp9JtIV6TjSG4ET2RIIA",
  authDomain: "angel-api-3bfff.firebaseapp.com",
  databaseURL: "https://angel-api-3bfff.firebaseio.com",
  projectId: "angel-api-3bfff",
  storageBucket: "angel-api-3bfff.appspot.com",
  messagingSenderId: "558216148272",
  appId: "1:558216148272:web:330fe49c12d79b93"
};
const useGetData = () => {

  firebase.initializeApp(firebaseConfig);
  console.log(firebase)
  const [myData, setData] = useState([]);

  useEffect( () => {
    fetch(api)
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  return myData;

}

export default useGetData;