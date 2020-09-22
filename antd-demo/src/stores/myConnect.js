function mapStateToProps(state) {
  return {
    value: state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: (num) => dispatch({number:num,type:"INCREMENT"}),
    onDecreaseClick: (num) => dispatch({number:num,type:"DECREMENT"})
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubApp);