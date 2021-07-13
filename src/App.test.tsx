/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import { expect } from 'chai';
import * as React from 'react';
import App from './App';
describe('<App>', () => {
  it('renders header', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/Twind react typescript/i);
    expect(document.body.contains(headerElement));
  });
});
