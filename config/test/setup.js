import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from "jsdom"


Enzyme.configure(
  { adapter: new Adapter() }
);

const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

global.historyLocation = {
  search: ''
}
global.historyPushFn = jest.fn();
global.testHistoryObject = {
  push: global.historyPushFn,
  location: global.historyLocation
}
jest.doMock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), 
  useHistory: () => global.testHistoryObject
}))
