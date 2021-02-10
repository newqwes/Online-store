/* eslint-disable import/no-extraneous-dependencies */
import Enzyme, { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default Enzyme;
