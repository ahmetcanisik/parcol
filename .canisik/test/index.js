const { Parcol } = require("../../index");

const p = new Parcol();

// testing parcol mods.
console.log(p.pit("~y hi~ ~r red~, my favorite color is a ~bl blue~ but I also love ~m purple~", "~d and dim~"));

// testing hyperlinker mod.
console.log(p.pit("~l GITHUB_TOKEN->https://github.com~"));