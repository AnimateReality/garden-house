import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Surrounded by Nature" />
      <h1 className="app__header-h1">Modern and Elegant House</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>House available for rent located 5 minutes from the ariport. </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.house} alt="header_img" />
    </div>
  </div>
);

export default Header;