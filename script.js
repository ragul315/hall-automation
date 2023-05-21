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

var sid = document.getElementById("sid");
var hall = document.getElementById("hall");
var dt = document.getElementById("dt");
var ftime = document.getElementById("ftime");
var ttime = document.getElementById("ttime");
        
var acth1,acth2,cntd=1;

function insertdata() {
    additemtotable(sid.value,dt.value,hall.value,ftime.value,ttime.value);
    set(ref(db,"user/"+cntd),{
        StaffId: sid.value,
        hallno: hall.value,
        date:dt.value,
        fromtime: ftime.value,
        totime: ttime.value
    })
    //prompt with error
    .then(()=>{
        alert("data added sucessfully");
    })
    .catch((error)=>{
        alert("unsuccess, error"+error);
    });
    cntd++;
    if (hall.value == "hall1") {
        set(ref(db, "Booking/" + dt.value + "/" + ftime.value), {
            hall1: "1",
        })
            .then(() => {
                
            })
            .catch((error) => {
                alert("unsuccess, error" + error);
            });
        set(ref(db, "Booking/" + dt.value + "/" + ttime.value), {
            hall1: "0",
        })
            .then(() => {
               
            })
            .catch((error) => {
                alert("unsuccess, error" + error);
            });
    } else {
        set(ref(db, "Booking/" + dt.value + "/" + ftime.value), {
            hall2: "1",
        })
            .then(() => {
               
            })
            .catch((error) => {
                alert("unsuccess, error" + error);
            });
        set(ref(db, "Booking/" + dt.value + "/" + ttime.value), {
            hall2: "0",
        })
            .then(() => {
              
            })
            .catch((error) => {
                alert("unsuccess, error" + error);
            });
    }
}

function checktime() {
    console.log("inchtime");
    var tdt = new Date();
    var ctm = tdt.getHours() + ":" + tdt.getMinutes();
    var cdt = new Date().toJSON().slice(0, 10);
    const dbref = ref(db);
    get(child(dbref, "Booking/" + cdt + "/" + ctm))
        .then((snapshot) => {
            if (snapshot.exists()) {
                acth1 = snapshot.val().hall1;
                acth2 = snapshot.val().hall2;
            }
        })

        .catch((error) => {
            alert("unsuccess, error" + error);
        });

    activatehall(acth1, acth2);
}

function activatehall(v1 , v2) {
    if (v1 == 1){
        set(ref(db, "hall1/"), {
            S1: 1 ,
            S2: 1 ,
        });
    }
    else{
        set(ref(db, "hall1/"), {
            S1: 0 ,
            S2: 0 ,
        }); 
    }
    if (v2 == 1){
        set(ref(db, "hall2/"), {
            S1: 1 ,
            S2: 1 ,
        });
    }
    else{
        set(ref(db, "hall2/"), {
            S1: 0 ,
            S2: 0 ,
        }); 
    }    
    
    
}

insbt.addEventListener("click", insertdata);

setInterval(checktime,30000);

var stdno = 0;
var tbody = document.getElementById('tbody1');

function additemtotable(name, date, hall, ftime, ttime) {
    let trow = document.createElement("tr");
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    td1.innerHTML = ++stdno;
    td2.innerHTML = name;
    td3.innerHTML = date;
    td4.innerHTML = hall;
    td5.innerHTML = ftime;
    td6.innerHTML = ttime;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);

    tbody.appendChild(trow);
}

function allitm(user) {
    stdNo = 0;
    tbody.innerHTML = "";
    user.forEach(element => {
        additemtotable(element.name, element.date, element.hall, element.ftime, element.ttime);
    });
}


function getalldataonce() {
    const dbRef = ref(db)

    get(child(dbRef, "user"))
        .then((snapshot) => {
            var invalues = [];
            array.forEach(elements => {
                invalues.push(childsnapshot.val());
            });
            allitm(invalues);
        });
}
window.onload = getalldataonce;