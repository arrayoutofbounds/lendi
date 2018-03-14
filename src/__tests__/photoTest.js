import React from 'react';
import Photo from '../components/Photo';
import expect from 'expect';
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer';


import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const photo = {
    "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/92c952"
}

let component;
beforeEach(() => {
    component =  shallow( <Photo key={1} photo={photo} />)
   })

describe("<Photo/> Exists", () =>{
  it("renders 1 photo component", () => {
    expect(component.length).toEqual(1);
  });
  it("renders props correctly", () => {
    expect(component.instance().props.photo).toBe(photo);
  });
  it("matches the snapshot", () => {
    const tree = renderer.create(<Photo key={1} photo={photo} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("has image tag", () => {
    expect(component.find('img').length).toBe(1);
  });
  it("simulate clicks on a tags", () => {
    component.find('.a1').simulate('click');
    component.find('.a2').simulate('click');
  });
});