import { Episode } from './Episode';
import { Location } from './Location';

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
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
