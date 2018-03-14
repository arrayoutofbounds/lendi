import React from 'react';
import Photo from '../components/Photo';
import expect from 'expect';
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer';


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

const photo = {
    "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/92c952"
}

describe("<Photo/> Exists", () =>{
  it("renders 1 photo component", () => {
    const component = shallow(<Photo key={1} photo={photo} />);
    expect(component.length).toEqual(1);
  });
  it("renders props correctly", () => {
    const component = shallow(<Photo key={1} photo={photo} />);
    expect(component.instance().props.photo).toBe(photo);
  });
  it("matches the snapshot", () => {
    const tree = renderer.create(<Photo key={1} photo={photo} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});