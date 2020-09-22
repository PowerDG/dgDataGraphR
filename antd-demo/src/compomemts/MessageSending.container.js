import { connect } from 'react-redux';
import { sendMessage } from './actions';
import MessageSending from './MessageSending';

const mapDispatchToProps = {
 sendMessage,
};

export default connect(null, mapDispatchToProps)(MessageSending);

// MessageSending.js
// ...
this.props.sendMessage(message);
// ...