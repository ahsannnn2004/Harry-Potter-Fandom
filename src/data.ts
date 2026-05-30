import { Character, Movie, LoreItem } from './types';

// Structured data for characters to keep logic cleanly separated from content.
export const characters: Character[] = [
  {
    id: 'hp1',
    name: 'Harry Potter',
    role: 'The Boy Who Lived',
    summary: 'The central protagonist of the series, marked by a lightning bolt scar and a destiny intertwined with the Dark Lord Voldemort. Harry discovers his magical heritage on his eleventh birthday and grows from a neglected orphan into a powerful and courageous wizard.',
    imageUrl: 'https://i.pinimg.com/474x/c5/c9/0f/c5c90f4be284a5100b36771cc1a586b7.jpg', // Cinematic placeholder
    house: 'Gryffindor'
  },
  {
    id: 'hp2',
    name: 'Hermione Granger',
    role: 'The Brightest Witch of Her Age',
    summary: 'Muggle-born and fiercely intelligent, Hermione is the logical anchor of the trio. Her immense magical knowledge, quick thinking, and unwavering loyalty repeatedly save Harry and Ron from peril.',
    imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afc41dbe-a943-43f2-bc37-802beffa82d7/davryff-4bc8245d-3534-4c54-a985-96748b878e40.jpg/v1/fill/w_1024,h_1821,q_75,strp/hermione_granger___wallpaper_by_julkedaniv_davryff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgyMSIsInBhdGgiOiIvZi9hZmM0MWRiZS1hOTQzLTQzZjItYmMzNy04MDJiZWZmYTgyZDcvZGF2cnlmZi00YmM4MjQ1ZC0zNTM0LTRjNTQtYTk4NS05Njc0OGI4NzhlNDAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.aS1RmcTgd5WHbDVIzKX13Qcpm2Ywokrwwh3N2PrCQVo',
    house: 'Gryffindor'
  },
  {
    id: 'hp3',
    name: 'Ron Weasley',
    role: 'The Loyal Best Friend',
    summary: 'Coming from a large, pure-blood wizarding family that is rich in love but poor in galleons, Ron brings humor, bravery, and steadfast friendship to the trio. Despite his insecurities, he is fiercely protective.',
    imageUrl: 'https://i.pinimg.com/736x/0a/20/9a/0a209a868fe22c773fefe689fe5420d3.jpg',
    house: 'Gryffindor'
  },
  {
    id: 'hp4',
    name: 'Albus Dumbledore',
    role: 'Headmaster of Hogwarts',
    summary: 'Considered the greatest wizard of modern times, Dumbledore is the enigmatic, wise, and highly powerful headmaster of Hogwarts. He guides Harry from a distance, understanding the heavy burdens the boy must carry.',
    imageUrl: 'https://i.pinimg.com/736x/da/b3/d1/dab3d1f464ee0488f6b765af61d3c65f.jpg',
    house: 'Gryffindor'
  },
  {
    id: 'hp5',
    name: 'Severus Snape',
    role: 'Potions Master',
    summary: 'A terribly complex and seemingly cruel professor whose allegiance is constantly questioned. Snape holds a deep-seated grudge against Harry\'s father, yet possesses a profound, tragic history that dictates his actions.',
    imageUrl: 'https://wallpapercat.com/w/full/8/5/e/250546-1575x2100-iphone-hd-severus-snape-background.jpg',
    house: 'Slytherin'
  },
  {
    id: 'hp6',
    name: 'Lord Voldemort',
    role: 'The Dark Lord',
    summary: 'Born Tom Marvolo Riddle, he is the most powerful Dark Wizard of all time. Obsessed with blood purity and immortality, he fractured his soul into Horcruxes, bringing terror to the wizarding world.',
    imageUrl: 'https://i.pinimg.com/736x/76/3f/7c/763f7cd196f63f4c47d43ac6b50c1236.jpg',
    house: 'Slytherin'
  }
];

// Structured array of the film series
export const movies: Movie[] = [
  {
    id: 'm1',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    year: 2001,
    director: 'Chris Columbus',
    imageUrl: 'https://www.wizardingworld.com/images/products/films/rectangle-1.png',
    description: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.'
  },
  {
    id: 'm2',
    title: 'Harry Potter and the Chamber of Secrets',
    year: 2002,
    director: 'Chris Columbus',
    imageUrl: 'https://www.wizardingworld.com/images/products/films/rectangle-2.png', // snake / mysterious
    description: 'An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.'
  },
  {
    id: 'm3',
    title: 'Harry Potter and the Prisoner of Azkaban',
    year: 2004,
    director: 'Alfonso Cuarón',
    imageUrl: 'https://www.wizardingworld.com/images/products/films/rectangle-3.png', // dark / moon
    description: 'Harry\'s third year at Hogwarts is threatened by Siruis Black, an escaped wizard prisoner who is believed to be looking for Harry.'
  },
  {
    id: 'm4',
    title: 'Harry Potter and the Goblet of Fire',
    year: 2005,
    director: 'Mike Newell',
    imageUrl: 'https://www.wizardingworld.com/images/products/films/rectangle-4.png', // fire / goblet
    description: 'Harry finds himself selected as an underaged competitor in a dangerous multi-wizardry school tournament.'
  },
  {
    id: 'm5',
    title: 'Harry Potter and the Order of the Phoenix',
    year: 2007,
    director: 'David Yates',
    imageUrl: 'https://www.wizardingworld.com/images/products/films/rectangle-5.png', // Ministry / prophecy
    description: 'With their warning about Lord Voldemort\'s return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat seizes power at Hogwarts.'
  },
  {
    id: 'm6',
    title: 'Harry Potter and the Half-Blood Prince',
    year: 2009,
    director: 'David Yates',
    imageUrl: 'https://www.wizardingworld.com/images/products/films/rectangle-6.png', // potions / dark memory
    description: 'As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as "the property of the Half-Blood Prince" and begins to learn more about Lord Voldemort\'s dark past.'
  },
  {
    id: 'm7',
    title: 'Harry Potter and the Deathly Hallows: Part 1',
    year: 2010,
    director: 'David Yates',
    imageUrl: 'https://www.wizardingworld.com/images/products/films/rectangle-7.png', // forest / hiding
    description: 'As Harry, Ron, and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.'
  },
  {
    id: 'm8',
    title: 'Harry Potter and the Deathly Hallows: Part 2',
    year: 2011,
    director: 'David Yates',
    imageUrl: 'https://www.wizardingworld.com/images/products/films/rectangle-8.png', // castle ruins / battle
    description: 'Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.'
  }
];

export const loreItems: LoreItem[] = [
  {
    id: 'l1',
    title: 'The Magic of Hogwarts',
    content: 'Hogwarts School of Witchcraft and Wizardry is a towering, enchanted castle nestled in the Scottish Highlands. Its grand staircases shift at will, its walls are adorned with moving portraits, and its halls harbor deeper secrets than any single wizard could discover in a lifetime. Invisible to Muggles, the castle is unplottable, protected by ancient magic and defensive enchantments of staggering complexity.',
    iconType: 'castle'
  },
  {
    id: 'l2',
    title: 'The Wand Chooses the Wizard',
    content: 'Ollivanders, the pre-eminent wand shop in Diagon Alley, has been crafting fine wands since 382 B.C. Each wand features a core of powerful magical substance—unicorn hair, dragon heartstring, or phoenix feather. As Mr. Ollivander famously observed, it is the wand that chooses the wizard, recognizing the innate magical resonance and potential within its wielder.',
    iconType: 'wand'
  },
  {
    id: 'l3',
    title: 'Potions and Alchemy',
    content: 'The subtle science and exact art of potion-making is a cornerstone of magical education. From the euphoria-inducing Felix Felicis (Liquid Luck) to the perilous, identity-shifting Polyjuice Potion, the draughts brewed in the damp dungeons of Hogwarts demand absolute precision, intuition, and patience.',
    iconType: 'potion'
  }
];
