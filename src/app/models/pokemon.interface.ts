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
}

export interface Sprites {
  other: Other;
}

export interface Other {
  'official-artwork': OfficialArtwork;
}

export interface OfficialArtwork {
  front_default: string;
}