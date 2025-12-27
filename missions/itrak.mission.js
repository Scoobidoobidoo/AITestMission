import { runMissions } from 'testronaut';

const itrak = `
go to https://itrak365qa.azurewebsites.net
Lo
Login with the following credentials:
Username: "nataliya.datsyuk@itrak365.com"
click "Next" button
Password: "Wan34748"
Click "Sign in" button
Take a screenshot of the home page.
To complete this mission, report SUCCESS immediately.
If you cannot reach this message, report FAILURE.
`;

export async function executeMission() {
  return await runMissions({

    mission: itrak
  }, 'Welcome Mission!');
}

