import { render, screen } from '@testing-library/react';
import * as React from 'react';

import App from 'business-hours/App';

test('renders App', () => {
   const text = 'Business Hours';
   render(<App />);
   expect(screen.getByText(text)).toBeInTheDocument();
});
