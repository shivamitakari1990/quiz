/**
 * Created by mitakars on 2/19/16.
 */

// state is not application state not a global state
//state = null is ES6 feature.
// Reducer returns new state of container/Application.
export default function selectedQuestion(state = null, action) {
  switch(action.type) {
    case 'QUESTION_SELECTED' :
      return action.payload
  }
  return state;
}