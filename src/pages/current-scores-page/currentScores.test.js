import { render, screen } from '@testing-library/react';
import CurrentScores from './CurrentScores';

describe('CurrentScores', () => {
  test('Title is displayed with the text "Current Scores."', () => {
    render(CurrentScores);
    const title = screen.getAllByLabelText('Current Scores.');

    expect(title).toBe(true);
  });
  test('Button is displayed with text "Add a Score".', () => {
    render(CurrentScores);
    const button = screen.getAllByRole('button');

    expect(button.textContent).toBe('Add a Score');
  });

});
