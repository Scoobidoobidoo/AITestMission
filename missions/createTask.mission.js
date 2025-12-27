import { runMissions } from 'testronaut';
import {loginGoal} from './login.mission.js';
const createTask = `
after the Login Mission is completed, stay on the page and Create a new mission task called "Vent airlock test".
take a screenshot.
Click the "Add" button.
Take a screenshot of the task list.

To complete this mission, report SUCCESS immediately.
If you cannot reach this message, report FAILURE.
`;

export async function executeMission() {
  return await runMissions({
    preMission: loginGoal,
    mission: createTask
  }, 'Create Task Mission!');
}

