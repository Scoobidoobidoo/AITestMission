import { runMissions } from 'testronaut';

export const loginGoal = `
Navigate to https://demo.testronaut.app/ 
take a screenshot.
Fill in the username and password fields with the following credentials:
username: "Buzz"
Access Code: "Lightyear"
Click the "Begin Simultion" button.
Take a screenshot of the home page.

determine if the login was successful by checking the presense of the "Logout" button.
take a screenshot.

To complete this mission, report SUCCESS immediately.
If you cannot reach this message, report FAILURE.

`;

export async function executeMission() {
  return await runMissions({
    mission: loginGoal
  }, 'Login Mission!');
}

