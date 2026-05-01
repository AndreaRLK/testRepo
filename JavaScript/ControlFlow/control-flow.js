let isLoggedIn = false;
let userMessage;

if (isLoggedIn) {
    if (userRole === 'admin') {
        userMessage = 'Welcome back, Admin!';
        console.log(userMessage);
    } else if (userRole === 'editor') {
        userMessage = 'Welcome back, Editor!';
        console.log(userMessage);
    } else if (userRole === 'viewer') {
        userMessage = 'Read-Only Access Granted. Welcome back, Viewer!';
        console.log(userMessage);
    }
} else {
    defaultMessage = 'Log in required.';
    console.log(defaultMessage);
}

let userRole = '';
let accessLevel;

if (userRole === 'admin') {
    accessLevel = 'Full Access';
    console.log('Full Access Granted. Welcome, Admin');
} else if (userRole === 'editor') {
    accessLevel = 'Limited Access';
    console.log('Limited Access Granted. Welcome, Editor');
} else if (userRole === 'viewer') {
    accessLevel = 'Read-Only Access';
    console.log('Read-Only Access Granted. Welcome, Viewer');
} else {
    console.log('Not Affiliated: Access Denied.');
}

let userType = '';
let userCategory;

switch (userType) {
    case 'admin':
        userCategory = 'Administrator';
        console.log('User Category Switched To: Administrator');
        break;
    case 'editor':
        userCategory = 'Manager';
        console.log('User Category Switched To: Manager');
        break;
    case 'viewer':
        userCategory = 'Subscriber';
        console.log('User Category Switched To: Subscriber');
        break;
    default:
        userCategory = 'Unknown';
        console.log('Access Denied.');
}