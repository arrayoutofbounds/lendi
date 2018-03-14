import React from 'react';
import App from '../components/App';
import Photo from '../components/Photo';
import expect from 'expect';
import renderer from 'react-test-renderer';
// import Enzyme from "enzyme";
// jest.mock("../styles/index.css", () => jest.fn());
// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() })


// test('renders without crashing', () => {
//   shallow(<Photo />);
// });

//import configureStore from '../stores/configureStore';


import configureStore from 'redux-mock-store'
 

// const store = configureStore();


import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// create any initial state needed
const initialState = {}; 
// here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore();
let wrapper;
let store;
beforeEach(() => {
  //creates the store with any initial state or middleware needed  
  store = mockStore(initialState)
  wrapper =  shallow( <App store={store}/>)
 })


describe("<App/> Exists", () =>{
  it("renders 1 app component", () => {
    expect(wrapper.length).toEqual(1);
  });
  // it("r", () =>{
  //   console.log(wrapper.instance().handleInfiniteLoad()); // true
  // });
});