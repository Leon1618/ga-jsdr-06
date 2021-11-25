// Exercises: Functions (very difficult)
// The following tasks are very, very difficult and not something we expect you to be able to do just yet. But if you are looking for an extra challenge and have a lot of time on your hands, have a go!

// Working with Users
// Starting with this data...

// const users = [
//   {
//     email: "groucho@ga.co",
//     password: "chicken",
//     isAdmin: true
//   },
//   {
//     email: "harpo@ga.co",
//     password: "elephant",
//     isAdmin: false
//   },
//   {
//     email: "gummo@ga.co",
//     password: "pinkFairyArmadillo",
//     isAdmin: true
//   },
//   {
//     email: "zeppo@ga.co",
//     password: "dumboOctopus",
//     isAdmin: false
//   }
// ];
// Create a function that receives an ID (index), an email and a password. If the function was provided with an email and a password that matches up, log "You are logged in". Otherwise, log "Sorry, something went wrong".

// Bonus: Working with Users
// Don't receive an ID! Find the user based on the email
// Make a function that creates an account. e.g. createAccount("chico@gmail.com", "redLippedBatfish", false);
// This should just add another object into the array
// Make a function that deletes an account. e.g. deleteAccount("zeppo@ga.co");
// This should just remove an object from the array
// Bonus: Make this only work if the correct password was provided as a parameter too
// Make a function that updates an account. e.g. updateAccount("harpo@ga.co", "password", "ayeAye");
// Bonus: Instead of receiving two strings to illustrate the change (like above), receive an object so you could potentially change multiple things at once. e.g. updateAccount("harpo@ga.co", { password: "gharial", isAdmin: false });
// Bonus: Make this work only if the current password was also provided as a parameter. e.g. updateAccount("harpo@ga.co", "elephant", { password: "gharial", isAdmin: true });
// Add a few extra users and make a search function. I'll let you decide on the interface or the function signature
// Bonus: A Transit Application
// Start with this data...

// const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];
// Create a function called travelFrom that receives a start station and an end station.

// Print the number of stops between the two stations. (e.g. log out "To go from 'Circular Quay' to 'Central' - you'll need to go through 2 stops")
// Print out the names of the stations on separate lines (e.g. log out "- Circular Quay", "- Wynyard", "- Townhall", "- Central")
// Bonus: A (more complicated) Transit Application
// Make this work if you want to go backwards! e.g. 'You want to travel from "Redfern" to "St. James"'
// Make it error-tolerant. E.g.:
// Make it case-insensitive - there should be no difference between "redfern", "Redfern" and "REDFERN"
// If someone passes in a station that doesn't exist, tell them
// Make it work across lines! I'll leave it up to you to create the data you need - but create arrays of multiple train lines in Sydney, and try it to get to print out the same things as above - but also things like "Swap lines at ....."
// This will be very, very difficult! Don't feel like you have to add in all the lines, just a few to prove that it is working
// Look at the hints below
// Hints
// You can receive the name of the line! (e.g. travelFrom("t2", "Circular Quay", "t3", "Canterbury"))
// Find the common station! (e.g. "t2" and "t3" both have "Central")
// Maybe drawing out the lines is a good approach!
// One of the easiest approaches to this is to treat a trip across lines as two separate trips
// An object with arrays stored under the name of the train lines might be a good way to approach it (e.g. const sydneyTrains = { t1: [], t2: [] };
// Note that if you want to use a variable to decide which line to access - dot notation won't work on an object! You'll have to think of another way (think square brackets!)
// Ask me questions about this if you want though!
// Work together as well - even if it is just in the planning stages


// Working with Users

const users = [
    {
      email: "groucho@ga.co",
      password: "chicken",
      isAdmin: true
    },
    {
      email: "harpo@ga.co",
      password: "elephant",
      isAdmin: false
    },
    {
      email: "gummo@ga.co",
      password: "pinkFairyArmadillo",
      isAdmin: true
    },
    {
      email: "zeppo@ga.co",
      password: "dumboOctopus",
      isAdmin: false
    }
];

function allowLogin (email, password) {
    let loggedIn = false;
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].email === email && users[i].password === password) {
            loggedIn = true;
            break; // break the for loop once the user is found
        } 
    }
    if (loggedIn) {
        console.log("You are logged in");
    } else {
        console.log("Sorry, something went wrong");
    }
    return loggedIn;
}

allowLogin ("gummo@ga.co", "pinkFairyArmadillo");
allowLogin ("gummo@ga.co", "pinkfairyw1ngs");

function createAccount (email, password, isAdmin = false) {
    let existingAccount = false;
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].email === email) {
            existingAccount = true;
            break; // break the for loop once the user is found
        } 
    }
    if (existingAccount) {
        console.log("Account already exists");
    } else {
        users.push({email: email, password: password, isAdmin: isAdmin});
        console.log("Your account has been created");
    }
}

createAccount ("gummo@ga.co", "pinkFairyArmadillo", true);
createAccount ("gummo2@ga.co", "p1nkfa1ryw1ngs", false);

function checkAdmin (email, password) {
    let isAdmin = false;
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].email === email && users[i].password === password && users[i].isAdmin) {
            isAdmin = true;
            break; // break the for loop once the user is found
        } 
    }
    return isAdmin;
}

function searchUser (email) {
    userId = users.findIndex (i => i.email === email);
    return userId;
}

function deleteAccount (email, password, deleteEmail = email) {
    let loggedIn = allowLogin (email, password);
    let isAdmin = checkAdmin(email, password);
    let deleteId = searchUser(deleteEmail);
    if (loggedIn && (deleteEmail === email || isAdmin)){
        if (deleteId !== -1){
            users.splice(deleteId, 1);
            console.log("you have deleted Account:", deleteEmail);
        } else {
            console.log("Account not found");
        }
    } else {
        console.log("you do not have permission to delete Account:", deleteEmail);
    }
}

deleteAccount ("zeppo@ga.co", "dumboOctopus"); // Can delete own account
deleteAccount ("gummo2@ga.co", "p1nkfa1ryw1ngs", "gummo@ga.co"); // Cannot delete another user
deleteAccount ("gummo@ga.co", "pinkFairyArmadillo", "gummo2@ga.co"); // Admin can delete other user

function updateAccount (email, password, updateEmail = email) {
    let loggedIn = allowLogin (email, password);
    let isAdmin = checkAdmin(email, password);
    let updateId = searchUser(updateEmail);
    if (loggedIn && (updateEmail === email || isAdmin)){
        if (updateId !== -1){
            let newEmail = prompt (`Enter new email for ${updateEmail} (leave blank to keep current email)`);
            if (newEmail) {
                users[updateId].email = newEmail;
                console.log(updateEmail, "Email set to:", newEmail);
            };
            newPassword = prompt (`Enter new password for ${updateEmail} (leave blank to keep current email)`);
            if (newPassword) {
                users[updateId].password = newPassword;
                console.log(updateEmail, "Password set to:", newPassword)
            };
            if (isAdmin) {
                let allowAdmin = prompt (`Allow admin for ${updateEmail}. (Enter true/false)`)
                if (allowAdmin === "true"){
                    users[updateId].isAdmin = true;
                    console.log(updateEmail, "is an admin");
                }else if (allowAdmin === "false") {
                    users[updateId].isAdmin = false;
                    console.log(updateEmail, "is not an admin");
                };
            }
        } else {
            console.log("Account not found");
        }
    } else {
        console.log("you do not have permission to update Account:", updateEmail);
    }
    console.log(users[updateId]);
}

updateAccount ("harpo@ga.co", "elephant","harpo@ga.co")
updateAccount ("gummo@ga.co", "pinkFairyArmadillo","harpo@ga.co")


// A transit Application

const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];

function travelFrom (fromStation, toStation) {
    let fromStationIndex = stations.findIndex(i => i.toLowerCase() === fromStation.toLowerCase());
    if (fromStationIndex === -1) {
        console.log(`Depature Station ${fromStation} not found`)
        return;
    }
    let toStationIndex = stations.findIndex(i => i.toLowerCase() === toStation.toLowerCase());
    if (toStationIndex === -1) {
        console.log(`Destination Station ${toStation} not found`)
        return;
    }
    let numOfStops = Math.abs(toStationIndex - fromStationIndex) - 1;
    let stationList = "";
    console.log(`To go from ${stations[fromStationIndex]} to ${stations[toStationIndex]} - you'll need to go through ${numOfStops} stops`);
    if (fromStationIndex < toStationIndex) {
        for (let i = fromStationIndex; i <= toStationIndex; i +=1) {
            stationList = stationList + "-" + stations[i] + " \n";
        }
    } else {
        for (let i = fromStationIndex; i >= toStationIndex; i -=1) {
            stationList = stationList + "-" + stations[i] + " \n";
        }
    }
    console.log(stationList);
}

travelFrom("cEntrAl", "CirCular quAy");
travelFrom("CirCular quAy", "cEntrAl");
travelFrom("Kings Cross", "cEntrAl");

************************************************************************
    
    // A (more complicated) Transit Application
function travelFrom (fromStation, toStation) {
    const stations = { 
        T1: ["Museum", "St. James", "Circular Quay", "Wynyard"],
        T2: ["Circular Quay", "Townhall", "Central", "Redfern"],
        T3: ["Central", "Macdonaldtown", "Newtown"],
    };
    
    function track (station) {
        let tracks = [];
        let validStation = false;
        for (let key in stations) {
            if (stations[key].find(a=> a.toLowerCase() === station.toLowerCase())) {
                tracks.push(key);
                validStation = true;
            }
        }
        if (validStation) {
            return tracks;
        } else return false; 
    }
    function transferAt () {
        if (fromTracks.includes("T1") && toTracks.includes("T1")){
            fromTracks = ["T1"];
            toTracks = ["T1"];
            return false;
        }
        if (fromTracks.includes("T2") && toTracks.includes("T2")){
            fromTracks = ["T2"];
            toTracks = ["T2"];
            return false;
        }
        if (fromTracks.includes("T3") && toTracks.includes("T3")){
            fromTracks = ["T3"];
            toTracks = ["T3"];
            return false;
        }
        if ((fromTracks.includes("T1") && toTracks.includes("T2")) || (toTracks.includes("T1") && fromTracks.includes("T2"))){
            if (fromTracks.indexOf("T3") > -1){
                fromTracks.splice(fromTracks.indexOf("T3"),1);
            }
            if (toTracks.indexOf("T3")> -1){
                toTracks.splice(toTracks.indexOf("T3"),1);
            }
            return ["Circular Quay"];
        }
        if ((fromTracks.includes("T2") && toTracks.includes("T3")) || (toTracks.includes("T2") && fromTracks.includes("T3"))){
            if (fromTracks.indexOf("T1") > -1){
                fromTracks.splice(fromTracks.indexOf("T1"),1);
            }
            if (toTracks.indexOf("T1") > -1){
                toTracks.splice(toTracks.indexOf("T1"),1);
            }
            return ["Central"];
        }
        if (fromTracks.includes("T1") && toTracks.includes("T3")){
            return ["Circular Quay", "Central"];
        }
        if (toTracks.includes("T1") && fromTracks.includes("T3")){
            return ["Central","Circular Quay"];
        }
    }
    function stationIndex (station, track){
        return (stations[track[0]].findIndex(i => i.toLowerCase() === station.toLowerCase()));
    }
    function travelItinerary () {
        function trackItinerary (trackAIndex, stationAIndex, trackBIndex, stationBIndex) {
            if (stationAIndex < stationBIndex) {
                for (let i = stationAIndex; i <= stationBIndex; i +=1) {
                    itinerary = itinerary + "-" + stations[trackAIndex][i] + " \n";
                    stops += 1;
                }
            } else {
                for (let i = fromStationIndex; i >= toStationIndex; i -=1) {
                    itinerary = itinerary + "-" + stations[trackAIndex][i] + " \n";
                    stops += 1;
                }
            }
        }
        if (!transferStation){
            trackItinerary(fromTracks[0], fromStationIndex, toTracks[0], toStationIndex);
        }
        if (transferStation[0] && !transferStation[1]) {
            let fromTransferIndex = stationIndex(transferStation[0],fromTracks);
            let toTransferIndex = stationIndex(transferStation[0],toTracks);
            trackItinerary(fromTracks[0], fromStationIndex, fromTracks[0], fromTransferIndex);
            itinerary = itinerary.slice(0,-2) + ": " + "Transfer to track "+ toTracks[0] + " \n";
            trackItinerary(toTracks[0], toTransferIndex, toTracks[0], toStationIndex);
            stops -= 1;
        }
        if (transferStation[0] && transferStation[1]) {
            let fromTransferIndex = stationIndex(transferStation[0],fromTracks);
            let fromT2Index = stationIndex(transferStation[0],["T2"]);
            let toT2Index = stationIndex(transferStation[1],["T2"]);
            let toTransferIndex = stationIndex(transferStation[1],toTracks);
            trackItinerary(fromTracks[0], fromStationIndex, fromTracks[0], fromTransferIndex);
            itinerary = itinerary.slice(0,-2) + ": " + "Transfer to track T2 \n";
            trackItinerary("T2", fromT2Index, "T2", toT2Index);
            itinerary = itinerary.slice(0,-2) + ": " + "Transfer to track "+ toTracks[0] + " \n";
            trackItinerary(toTracks[0], toTransferIndex, toTracks[0], toStationIndex);
            stops -= 2;
        }
        
        
        console.log("your trip will require", stops, "stops");
        console.log(itinerary);
    }
    let fromTracks = track(fromStation);
    let toTracks = track(toStation);
    
    
    if (!fromTracks) {
        console.log (fromStation, "station not found")
        return;
    }
    if (!toTracks) {
        console.log (toStation, "station not found")
        return;
    }
    let transferStation = transferAt();
    let fromStationIndex = stationIndex(fromStation,fromTracks);
    let toStationIndex = stationIndex(toStation,toTracks);
    let itinerary = "";
    let stops = 0;
    
    travelItinerary();
}
travelFrom("Museum", "Wynyard"); // Both on track 1 no transfer
travelFrom("Circular Quay", "Redfern"); // Both on track 2 no transfer
travelFrom("newtown", "Central"); // Both on track 3 no transfer
travelFrom("MusEum", "Wynyard"); // Case insensitive
travelFrom("Wynyard", "MusEum"); // travel backwards
travelFrom("Kings Cross", "Wynyard"); // Halts if not a station and returns invalid station name.
travelFrom("Museum", "Redfern"); // from track 1 to track 2 showing a transfer at "Circular Quay"
travelFrom("redfern", "newtown") // from track 2 to track 3 showing a transfer at "central"
travelFrom("Museum", "newtown") // from track 1 to track 3 showing a transfer at "Circular Quay" & "central"
travelFrom("newtown", "museum") // from track 3 to track 1 showing a transfer at "central" & "Circular Quay"
Collapse



:raised_hands:
1


1 reply
17 days agoView thread

Benedict Lawrence  17:19
some work on the functions problems (still more to do)

Benedict Lawrence  17:19
const users = [
  {
    email: "groucho@ga.co",
    password: "chicken",
    isAdmin: true,
  },
  {
    email: "harpo@ga.co",
    password: "elephant",
    isAdmin: false,
  },
  {
    email: "gummo@ga.co",
    password: "pinkFairyArmadillo",
    isAdmin: true,
  },
  {
    email: "zeppo@ga.co",
    password: "dumboOctopus",
    isAdmin: false,
  },
];

// get username and password
// iterate through user array
// if user.email and user.password are as povided log "signed in"
// else log "Sorry, something went wrong".

function signIn(username, password) {
  let authenticated = false;
  users.forEach(check);
  function check(item) {
    if (username === item.email && password === item.password) {
      authenticated = true;
      return authenticated;
    }
  }
  if (authenticated === true) {
    console.log("You are logged in");
  } else {
    console.log("Sorry, something went wrong");
  }
}

signIn("incorrectlogin@ga.co", "incorrectpassword");
signIn("gummo@ga.co", "pinkFairyArmadillo");

function createAccount(newEmail, newPassword, newIsAdmin) {
  users.push({
    email: newEmail,
    password: newPassword,
    isAdmin: newIsAdmin,
  });
  console.log(newEmail, "has been created");
}

createAccount("mickeymouse@ga.co", "donaldduck", false);

function deleteAccount(accountToDelete, password) {
  let ableToDelete = false;
  users.forEach(check);
  function check(item, index) {
    if (accountToDelete === item.email && password === item.password) {
      users.splice(index, 1);
      ableToDelete = true;
    }
  }
  if (ableToDelete === true) {
    console.log(accountToDelete, "has been deleted");
  } else {
    console.log("Unable to authenticate", accountToDelete, "Please try again");
  }
}

deleteAccount("mickeymouse@ga.co", "donaldduck");

const stations = [
  "Museum",
  "St. James",
  "Circular Quay",
  "Wynyard",
  "Townhall",
  "Central",
  "Redfern",
  "Macdonaldtown",
  "Newtown",
];

//create function that receives start station and end station

// iterate from start station to end station

//count the iterations

//print the stops

function trainJourney(startStation, endStation) {
  let standardStations = stations.map((station) => station.toLowerCase());

  standardStartStation = startStation.toLowerCase();

  standardEndStation = endStation.toLowerCase();

  startStationIndex = standardStations.indexOf(standardStartStation);

  endStationIndex = standardStations.indexOf(standardEndStation);

  if (startStationIndex === -1 && endStationIndex === -1) {
    console.log(
      "'" + startStation + "' and '" + endStation + "' are not valid stations."
    );
  } else if (startStationIndex === -1) {
    console.log("'" + startStation + "' is not a valid station.");
  } else if (endStationIndex === -1) {
    console.log("'" + endStation + "' is not a valid station.");
  } else if (startStationIndex > endStationIndex) {
    console.log(
      "To go from '" +
        stations[startStationIndex] +
        "' to '" +
        stations[endStationIndex] +
        "' you'll need to go through " +
        (startStationIndex - endStationIndex) +
        " stops. Those stations are:"
    );

    for (i = startStationIndex; i >= endStationIndex; i -= 1) {
      console.log("-", stations[i]);
    }
  } else {
    console.log(
      "To go from '" +
        stations[startStationIndex] +
        "' to '" +
        stations[endStationIndex] +
        "' you'll need to go through " +
        (endStationIndex - startStationIndex) +
        " stops. Those stations are:"
    );

    for (i = startStationIndex; i <= endStationIndex; i += 1) {
      console.log("-", stations[i]);
    }
  }
}
