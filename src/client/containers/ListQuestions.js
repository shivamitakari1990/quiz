import React, {Component} from 'react'
import { connect } from 'react-redux';
import selectQuestion from 'client/actions/selectQuestion';
import ActiveQuestion from './activeQuestion.js'

@connect(state => ({
  questions: state.questions,
  selectQuestion: selectQuestion
}))
export default class ListQuestions extends Component {
  static propTypes = {
    questions: React.PropTypes.array,
    selectQuestion: React.PropTypes.func
  }
  renderQuestions() {
    //const {questions} = this.props
    const questions = this.props.questions
    return questions.map(
      (question, i) => {
           return (
             <li key={i } className="list-group-item" onClick={() => {this.props.selectQuestion(question)} }>{i + 1}</li>
           );
      }
    );
  }
  render () {
    const questions = this.props.questions
    return (
      <div className='wrapper'>
        <div className='pull-left'>
          <ul className="list-group">
            {this.renderQuestions()}
          </ul>
        </div>
        <div className='pull-center'>
          <ActiveQuestion />
        </div>
      </div>
    )
  }
}
