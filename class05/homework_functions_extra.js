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
