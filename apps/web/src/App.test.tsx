import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('renders the ManualLab foundation screen', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /transform technical manuals into structured knowledge/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/foundation v0\.1\.0/i)).toBeInTheDocument();

    expect(screen.getByText(/web ready/i)).toBeInTheDocument();
  });
});
