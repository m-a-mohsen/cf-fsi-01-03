// source https://pokedex.org/

let pokemonList = [];

pokemonList = [
    {
        name:"Bulbasaur",
        height: 7,
        types: ['grass', 'poison']
    },
    {
        name:"Ivysaur",
        height: 10,
        types: ['water', 'sand']
    },    {
        name:"Venusaur",
        height: 20,
        types: ['glass', 'stone']
    }
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write(`<p>${pokemonList[i].name} (height: ${pokemonList[i].height})</p>`);
}