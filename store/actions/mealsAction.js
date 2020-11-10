export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (task) => {
    return { type: ADD_TASK, task: task }
}

export const deleteTask = (taskID) => {
    return { type: DELETE_TASK, taskID: taskID }
}