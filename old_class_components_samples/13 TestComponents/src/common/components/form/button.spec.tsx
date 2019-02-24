import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from './button';

describe('common/components/form/button specs', () => {
    it('should render as expected when passing required properties', () => {
        // Arrange
        const props = {
            label: 'test label',
            className:'test className',
            onClick: () => { },
        };

        // Act
        const component = shallow(
            <Button
                {...props}
            />,
        );

        // Assert
        expect(component).toMatchSnapshot();
    });

    it('should call onClick prop when simulate button click', () => {
        // Arrange
        const props = {
            label: 'test label',
            onClick: jest.fn(),
            className: 'test className',
        };

        // Act
        const component = shallow(
            <Button
                {...props}
            />,
        );
        component.simulate('click');
        
        // Assert
        expect(props.onClick).toHaveBeenCalled();
    });
   
});