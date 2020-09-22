
import { connect } from 'react-redux';
import { sendMessage, navigateTo } from './actions';

const mapDispatchToProps = dispatch => ({
 sendMessage: messaga => {
 dispatch(sendMessage(message));
 dispatch(navigateTo({ routeName: 'messagesList' }));
 },
});

export default connect(null, mapDispatchToProps)(MessageSending);