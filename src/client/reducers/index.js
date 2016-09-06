import {combineReducers} from 'redux';
import Questions from './reducerQuestions';
import ActiveQuestion from './reducerActiveQuestion';

const RootReducer = combineReducers({
  questions : Questions,
  activeQuestion: ActiveQuestion
});
export default RootReducer
