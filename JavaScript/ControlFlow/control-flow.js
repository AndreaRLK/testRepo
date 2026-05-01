let isLoggedIn = true;
let userRole = "admin";
let userMessage;

// Using if-else statements for user login status and role
if (isLoggedIn) {
  if (userRole === "admin") {
    userMessage = "LogIn By: Admin";
    console.log(userMessage);
  } else if (userRole === "editor") {
    userMessage = "LogIn By: Editor";
    console.log(userMessage);
  } else if (userRole === "viewer") {
    userMessage = "LogIn By: Viewer";
    console.log(userMessage);
  }
} else {
  defaultMessage = "Log in required.";
  console.log(defaultMessage);
}

// Using if-else statements for user role access control
let accessLevel;

if (userRole === "admin") {
  accessLevel = "Full Access";
  console.log("Admin: Full access has been granted.");
} else if (userRole === "editor") {
  accessLevel = "Limited Access";
  console.log("Editor: Limited access has been granted.");
} else if (userRole === "viewer") {
  accessLevel = "Read-Only Access";
  console.log("Viewer: Read-only access has been granted.");
} else {
  console.log("Not Affiliated: Access Denied.");
}

// Using switch-case statements for user role access control
let userType = userRole;
let userCategory;

switch (userType) {
  case "admin":
    userCategory = "Administrator";
    console.log("User Category: " + userCategory);
    break;
  case "editor":
    userCategory = "Manager";
    console.log("User Category: " + userCategory);
    break;
  case "viewer":
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