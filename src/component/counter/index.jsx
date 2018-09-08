import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChanged, changeCounter } from './counterActions'

const Counter = props => (
    <div>
        <input onChange={props.changeCounter}
            value={props.counter.number} type='number' />
        <button onClick={props.dec}>-</button>
        <button onClick={props.inc}>+</button>
    </div>
)

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps =
    dispatch => bindActionCreators({ inc, dec, stepChanged, changeCounter }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

