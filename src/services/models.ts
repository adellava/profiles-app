export type CharacterResponse = {
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

export type ListCharactersResponse = {
  info: {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
  };
  results: CharacterResponse[];
};

export type LocationResponse = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type EpisodeResponse = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type CompleteCharacter = {
  character: CharacterResponse;
  origin: LocationResponse;
  location: LocationResponse;
  episodes: EpisodeResponse[];
};
