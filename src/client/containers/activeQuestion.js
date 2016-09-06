import React, {Component} from 'react'
import { connect } from 'react-redux';

export default class Active extends Component {
  render () {
    console.log(this.props);
    return (
      <div>
        This is Acrive
      </div>
    )
  }
}
