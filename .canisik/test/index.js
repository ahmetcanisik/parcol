const { Parcol } = require("../../index");

// testing parcol mods.
const p = new Parcol();
console.log(p.pit("~y hi~ ~r red~, my favorite color is a ~bl blue~ but I also love ~m purple~"));

// testing hyperlinker mod.
console.log(p.pit("~l GITHUB_TOKEN->https://github.com~"));