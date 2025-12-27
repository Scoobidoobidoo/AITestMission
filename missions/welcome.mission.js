import { runMissions } from 'testronaut';

const welcomeGoal = `
Welcome to Testronaut!

This is your first mission.
All we ask is that you confirm this setup is working correctly.

To complete this mission, report SUCCESS immediately.
If you cannot reach this message, report FAILURE.
`;

export async function executeMission() {
  return await runMissions({
    mission: welcomeGoal
  }, 'Welcome Mission!');
}

