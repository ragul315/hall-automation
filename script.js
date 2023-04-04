import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyCe6mmtcXKcMxObKCUqvh47_r1ab4jG0fc",
    authDomain: "hall-automation-da918.firebaseapp.com",
    databaseURL: "https://hall-automation-da918-default-rtdb.firebaseio.com",
    projectId: "hall-automation-da918",
    storageBucket: "hall-automation-da918.appspot.com",
    messagingSenderId: "57900134656",
    appId: "1:57900134656:web:e6373f5c2173245102c3e5",
};

const app = initializeApp(firebaseConfig);
import {
    getDatabase, ref, get, set, child, update, remove,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
const db = getDatabase();