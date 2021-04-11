import {Appointment } from '../src/Appointment';
import ReactDOM from 'react-dom';
import React from "react";

describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley' };
        const component = <Appointment customer={customer} />;
        const container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(component, container);

        expect(document.body.textContent).toMatch('Ashley');
    })
});