import React from 'react';
import StoreLocator from '../StoreLocator';
import { shallow } from 'enzyme';
import axios from 'axios';
import renderer from 'react-test-renderer'
// import Button from '../../components/Button';

describe("StoreLocator", function () {
  let mountedStoreLocator;
  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  })

  it('renders correctly', ()=>{
    const tree = renderer.create(<StoreLocator/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    let mountedStoreLocator = shallow(<StoreLocator />);

  });

  it('renders a header', () => {
    const headers = mountedStoreLocator.find('Header');
    expect(headers.length).toBe(1);

  });
  it('renders three buttons', () => {
    const Buttons = mountedStoreLocator.find('Button');
    expect(Buttons.length).toBe(3);

  });

  it('renders a map ', () => {
    const map = mountedStoreLocator.find('Map');
    expect(map.length).toBe(1);

  });

  it('calls axios.get in #componentDidMount', () => {
    return mountedStoreLocator.instance().componentDidMount().then(() => {
      expect(axios.get).toHaveBeenCalled();
    })
  });

  it('calls axios.get with correct url', () => {
    return mountedStoreLocator.instance().componentDidMount().then(() => {
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/Markets.json');
    })
  });

  it('updates state with data from api', () => {
    return mountedStoreLocator.instance().componentDidMount().then(() => {
      expect(mountedStoreLocator.state()).toHaveProperty('Markets',
        [{
          "Location": "test Location",
          "address": "test address"

        }]
      );
    })

  });


});

describe('choose map', () => {
  it('updates this.state.currentMap using the location passed to it', () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
    let mockEvent = { target: { value: 'testland' } };
    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.jpg');
  })

});

