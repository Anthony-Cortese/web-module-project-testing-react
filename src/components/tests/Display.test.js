import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';
import Display from '../Display';
import userEvent from '@testing-library/user-event';

const testShow = {
    name: '',
    image: {},
    summary: '',
    seasons: [
        {
        id: 0,
        name: 'Season 1', 
        episodes: []
        },
        {
        id: 1,
        name: 'Season 2',
        episodes: []
        },
        {
        id: 2,
        name: 'Season 3',
        epsiodes: []
        },
        {
            id: 3,
            name: 'Season 4',
            epsiodes: []
            },
    ]

}

test('Display renders', () => {
    render(<Display />)
})

test('the fetch button is pressed, the show component will display.', () => {
    const mockFetchData = jest.fn(() => {'fetched data'})
    
    render(<Display fetchData={mockFetchData} />);
    const button = screen.getByRole('button');
    fireEvent.click(button)

    

})

test('fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data', () => {
    const mockFetchData = jest.fn(() => {'fetched data'})
    
    render(<Display fetchData={mockFetchData} />);
    const button = screen.getByRole('button');
    fireEvent.click(button)

    // const totalSeasons = screen.getByRole('combobox')
    // userEvent.selectOptions(totalSeasons, '1');
    // expect(mockFetchData).toHaveLength(4);

    // expect(mockFetchData.mock.calls).toHaveLength(4)


})
















///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.