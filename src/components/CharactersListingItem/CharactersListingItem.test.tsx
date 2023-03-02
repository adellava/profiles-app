import { CharactersListingItem } from './CharactersListingItem';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
describe('CharactersListingItem', () => {
  it('should render', () => {
    expect(CharactersListingItem).toBeTruthy();
  });

  it('should render a character', () => {
    const testRenderer = TestRenderer.create(
      <CharactersListingItem
        character={{
          id: 1,
          gender: 'Male',
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          type: '',
          episode: [],
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          url: 'https://rickandmortyapi.com/api/character/1',
          origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
          },
          location: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
        }}
        onCharacterClick={() => {
          console.log('click');
        }}
      />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('should trigger onCharacterClick', async () => {
    const onCharacterClick = vi.fn();
    render(
      <CharactersListingItem
        character={{
          id: 1,
          gender: 'Male',
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          type: '',
          episode: [],
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          url: 'https://rickandmortyapi.com/api/character/1',
          origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
          },
          location: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
        }}
        onCharacterClick={onCharacterClick}
      />
    );

    await userEvent.click(screen.getByRole('article'));
    expect(onCharacterClick).toHaveBeenCalled();
  });
});
