import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
/* Until enzyme supports hooks in shallow rendering */
// import enableHooks from 'jest-react-hooks-shallow';
// import Moment from 'moment-timezone';

Enzyme.configure({adapter: new Adapter(), disableLifecycleMethods: true});
// Moment.tz.setDefault('CET');

// enableHooks(jest);
