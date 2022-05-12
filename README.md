# Pokémon Gold Adventure

![image](https://user-images.githubusercontent.com/14997703/168137469-61f6df62-f797-4534-b22b-b761d4273f17.png)

This is a [WorkAdventure](https://workadventu.re/) world with the Game Boy game [Pokemon Gold](https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver "Wikipedia") maps.

## Progress

#### New Bark Town

- [x] Ethan's bedroom
- [x] Ethan's living room

## Installation

With npm installed (comes with [node](https://nodejs.org/en/)), run the following commands into a terminal in the root directory of this project:

```shell
npm install
npm run start
```

## Licenses

This project contains multiple licenses as follows:

* [Code license](./LICENSE.code) *(all files except those for other licenses)*
* [Map license](./LICENSE.map) *(`map.json` and the map visual as well)*
* [Assets license](./LICENSE.assets) *(the files inside the `src/assets/` folder)*

## Credits

This is a personal project and it makes no sense to put a licence or credits for this as it's not legal to make any stuff with official Pokemon assets... 

But let's credit the original game creators anyway:
- Developed by [Game Freak](https://www.gamefreak.co.jp/)
- Published by [Nintendo](https://www.nintendo.com/)
- Pokémon modeling by [Creatures](https://www.creatures.co.jp/)
- Music by [Junichi Masuda](https://en.wikipedia.org/wiki/Junichi_Masuda)
- Licensing by [The Pokémon Company](https://www.pokemon.com/)

### About third party assets

If you add third party assets in your map, do not forget to:
1. Credit the author and license with the "tilesetCopyright" property present in the properties of each tilesets in the `map.json` file
2. Add the license text in LICENSE.assets
