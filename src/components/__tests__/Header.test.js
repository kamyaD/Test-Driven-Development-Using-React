import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../containers/App';
import { shallow } from 'enzyme';
import Header from '../Header';



describe(Header, function () {
  let MountedHeader;
  beforeEach(() => {
    MountedHeader = shallow(<Header />);

  })


  it('renders without crashing', () => {
    shallow(<Header />);
  });
  it('contains a logo', () => {
    const logoImg = MountedHeader.find('img');
    expect(logoImg.length).toBe(1);


  });

});


