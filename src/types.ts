export interface Character {
  id: string;
  name: string;
  role: string;
  summary: string;
  imageUrl: string;
  house: 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff' | 'None';
}

export interface Movie {
  id: string;
  title: string;
  year: number;
  director: string;
  imageUrl: string;
  description: string;
}

export interface LoreItem {
  id: string;
  title: string;
  content: string;
  iconType: 'wand' | 'castle' | 'book' | 'potion';
}
