type Character = {
  id: number;
  name: string;
  status: string;
  url: string;
};

type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
};

type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
};

type CharacterHistory = {
  character: Character;
  location: Location;
  origin: Location;
  episodes: Episode[];
};

export { Character, CharacterHistory };
