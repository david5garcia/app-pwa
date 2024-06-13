export interface Pokemon {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  sprites: Sprites;
  weight: number;
  abilities: Ability[];
  types: Type[];
  stats: Stat[];
}

export interface Sprites {
  other: Other;
}

export interface Other {
  'official-artwork': OfficialArtwork;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Ability {
  ability: {
    name: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Type {
  slot: number;
  type: {
    name: string;
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}