import { Episode } from './Episode';
import { Location } from './Location';

type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';
type Status = 'Alive' | 'Dead' | 'unknown';

export type Character = {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
};

export type CompleteCharacter = {
  character: Character;
  origin: Location;
  location: Location;
  episodes: Episode[];
};
