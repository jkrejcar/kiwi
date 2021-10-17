import React from 'react';
import renderer from 'react-test-renderer';

import Keyboard from '../components/Keyboard';

it ("Render keyboard which matches keyboard SnapShot", () => {
    const tree = renderer.create(
        <Keyboard />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});