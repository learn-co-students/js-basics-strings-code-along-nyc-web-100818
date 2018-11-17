const currentUser = 'Sarah Pai';
//const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + "!"; //concate
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`; //template literal
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
