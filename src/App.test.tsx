import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import * as React from 'react';
import App from './App';

describe('<App>', () => {
  it('renders header', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/React + TypeScript + Twind/i);
    expect(headerElement).toBeInTheDocument();
  });
});
