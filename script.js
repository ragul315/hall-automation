//firebase connection
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

//variables for inputs

var sid = document.getElementById("sid");
var hall = document.getElementById("hall");
var dt = document.getElementById("dt");
var ftime = document.getElementById("ftime");
var ttime = document.getElementById("ttime");
var acthl;

function insertdata() {   //insert function
    if (hall.value == "hall1") {
        set(ref(db, "Booking/" + dt.value + "/" + ftime.value), {
            hall1: "1",
        })
            .then(() => {
                alert("data added sucessfully");
            })
            .catch((error) => {
                alert("unsuccess, error" + error);
            });
        set(ref(db, "Booking/" + dt.value + "/" + ttime.value), {
            hall1: "0",
        })
            .then(() => {
                alert("data added sucessfully");
            })
            .catch((error) => {
                alert("unsuccess, error" + error);
            });
    } else {
        set(ref(db, "Booking/" + dt.value + "/" + ftime.value), {
            hall2: "1",
        })
            .then(() => {
                alert("data added sucessfully");
            })
            .catch((error) => {
                alert("unsuccess, error" + error);
            });
        set(ref(db, "Booking/" + dt.value + "/" + ttime.value), {
            hall2: "0",
        })
            .then(() => {
                alert("data added sucessfully");
            })
            .catch((error) => {
                alert("unsuccess, error" + error);
            });
    }
}

//function to activate and deactivate halls
function activatehall(hl, vl) {
    if (vl == "1") {
        set(ref(db, hl), {
            S1: 1,
            S2: 1,
            S3: 1,
            S4: 1,
        });
    } else {
        set(ref(db, hl), {
            S1: 0,
            S2: 0,
            S3: 0,
            S4: 0,
        });
    }
}

//functions to be called by buttons
insbt.addEventListener("click", insertdata);