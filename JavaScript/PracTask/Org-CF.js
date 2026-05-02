let isLoggedIn = true;
let userRole = "employee";
let userMessage;

// Using if-else statements for user login status and role
if (isLoggedIn) {
  if (userRole === "employee") {
    userMessage = "LogIn By: Employee";
    console.log(userMessage);
  } else if (userRole === "member") {
    userMessage = "LogIn By: Member";
    console.log(userMessage);
  } else if (userRole === "subscriber") {
    userMessage = "LogIn By: Subscriber";
    console.log(userMessage);
  }
} else {
  defaultMessage = "Non-subscriber. Account setup required.";
  console.log(defaultMessage);
}

// Using if-else statements for user role access control
let accessLevel;

if (userRole === "member") {
  accessLevel = "Full Access";
  console.log("Member: Access to Dietary Services and Dietician Consultation.");
} else if (userRole === "employee") {
  accessLevel = "Limited Access";
  console.log("Employee: Access to Dietary Services.");
} else if (userRole === "subscriber") {
  accessLevel = "Partial Access";
  console.log("Subscriber: Partial Access to Dietary Services.");
} else {
  console.log("Non-Subscriber: Restricted Access to Dietary Services.");
}

// Using switch-case statements for user role access control
let userType = userRole;
let userCategory;

switch (userType) {
  case "member":
    userCategory = "Enrolled Member";
    console.log("User Category: " + userCategory);
    break;
  case "employee":
    userCategory = "Organization Rep";
    console.log("User Category: " + userCategory);
    break;
  case "subscriber":
    userCategory = "Subscriber";
    console.log("User Category: " + userCategory);
    break;
  default:
    userCategory = "Unknown";
    console.log("Access Denied.");
    console.log("User Category: " + userCategory);
}

//ternary operator for isAuthenticated and authentication status
let isAuthenticated = true;

let authStatus = userRole ? "Authenticated" : "Not Authenticated";
console.log("Authentication Status: " + authStatus);