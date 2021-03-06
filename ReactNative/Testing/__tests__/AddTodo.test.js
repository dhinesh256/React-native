import * as React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react-native';
import configureStore from '../ReduxTesting/store';
import AddTodo from '../ReduxTesting/components/AddTodo';

describe('Application test', () => {
  test('adds a new test when entry has been included', () => {
    const store = configureStore();

    const component = (
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );

    const { getByPlaceholderText, getByText } = render(component);

    const input = getByPlaceholderText(/repository/i);
    expect(input).toBeTruthy();

    const textToEnter = 'This is a random element';
    fireEvent.changeText(input, textToEnter);
    fireEvent.press(getByText('Submit form'));

    const todosState = store.getState().todos;
    store.g

    console.log(todosState)

    expect(todosState.length).toEqual(1);

    expect(todosState).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          text: textToEnter,
          date: expect.any(Date),
        }),
      ])
    );
  });
});
