import React from 'react';
import {App, NUM_PHOTOS} from '../components/App';
import Photo from '../components/Photo';
import expect from 'expect';
import renderer from 'react-test-renderer';
import photos from './fixtures/photos.json';
jest.mock("../styles/index.css", () => jest.fn());

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
jest.useFakeTimers();

let wrapper;
const fetchPhotos = jest.fn(() => new Promise((resolve) => resolve())); //mock version
beforeEach(() => {
  wrapper =  shallow( <App fetchPhotos={fetchPhotos} photos={photos} />)
 })

describe("<App/> Exists", () =>{
  it("renders 1 app component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("fetchPhotos was called", () => {
    expect(fetchPhotos).toHaveBeenCalled();
  });
  it("calls handleInfiniteLoad and checks state", () =>{
    const numPhotos = wrapper.state("elements").length;
    wrapper.instance().handleInfiniteLoad();
    expect(wrapper.state("isInfiniteLoading")).toBe(true);
    jest.runAllTimers();
    expect(wrapper.state("isInfiniteLoading")).toBe(false);
    expect(wrapper.state("elements").length).toEqual(numPhotos+NUM_PHOTOS);
  });
  it("calls buildElements", () => {
    expect(wrapper.instance().buildElements(0,20).length).toEqual(20);
  });
});