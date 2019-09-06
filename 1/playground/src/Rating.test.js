import React from "react";
import Rating from './Rating';
import TestRenderer from 'react-test-renderer';

it('renders a component without crashing', () => {
    const instance = TestRenderer.create(<Rating stars={3} />).root;
})

it("renders a component with 5 children", () => {
    const instance = TestRenderer.create(<Rating stars={3} />).root;
    expect(instance.children[0].children).toHaveLength(5);
})

it("renders 5 spans", () => {
    const instance = TestRenderer.create(<Rating stars={3} />).root;
    expect(instance.findAllByType("span")).toHaveLength(5);
})

it("renders 3 active stars", () => {
    const instance = TestRenderer.create(<Rating stars={3} />).root;
    expect(instance.findAllByProps({className: "star on"})).toHaveLength(3);
})

describe("events", () => {
    it('reacts to click on the fourht star', () => {
        const mockFn = jest.fn();
        const instance = TestRenderer.create(
                <Rating stars={3} onChange={mockFn} />
        ).root;
        const star4 = instance.findAllByType('span')[3];
        // simulate click
        star4.props.onClick();
        expect(mockFn).toBeCalledWith(4);
    })
})

it('correctly renders 3 stars to snapshot', () => {
    const tree = TestRenderer
        .create( <Rating stars={3} /> ).toJSON();
        expect(tree).toMatchSnapshot();
})