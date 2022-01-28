import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { getByTestId, queryByTestId, } from '@testing-library/jest-dom';
import { render } from '@testing-library/react';

function allThingsDOM() {

    test('modal opens on Learn More button click', async () => {
        const { App } = render(<App />);

        const button = screen.getByTestId('learn-more-btn')

        fireEvent.click(button)

        expect(screen.getByTestId('modal').toBeInTheDocument())
    })

}