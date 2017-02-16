import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Images from '../Images';

describe('Images component renders correctly', () => {
  const text = 'Hello testie McTest';

  it('renders correctly', () => {
    const rendered = renderer.create(
      <Images text={text}/>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('renders in enzyme', () => {
    const ImagesComponent = shallow(<Images text={text} />);
    expect(ImagesComponent.text()).toEqual(text);
  });
});
