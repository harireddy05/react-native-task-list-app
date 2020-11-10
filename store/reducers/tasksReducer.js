import initialList from '../../assets/initialList';
import { ADD_TASK } from '../actions/mealsAction';
import { DELETE_TASK } from '../actions/mealsAction';

const tasksReducer = (state = initialList, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [{
                key: Math.random().toString(),
                title: action.task,
                completed: false
            }, ...state];
        case DELETE_TASK:
            const res = state.filter((ye => ye.key !== action.taskID));
            state = res;
            return state;
        default:
            return state;
    }
}

export default tasksReducer;



