import React from 'react';
import Photo from '../components/Photo';
import expect from 'expect';
import configureStore from 'redux-mock-store'


import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// const initialState = {}; 

// const mockStore = configureStore();
// let wrapper;
// let store;
// beforeEach(() => {
//   store = mockStore(initialState)
//   wrapper =  shallow( <Photo />);
//  })

const wrapper = shallow(<Photo />);
describe("<Photo/> Exists", () =>{
  it("renders 1 photo component", () => {
    // expect(wrapper.length).toEqual(1);
    console.log(wrapper.props())
    //expect(wrapper.props().data).toBe('something');
  });
});