import parcol, { Parcol } from "./index.js";
// testing parcol mods.
console.log(parcol.pit("~y hi~ ~r red~, my favorite color is a ~bl blue~ but I also love ~m purple~", "~d and dim~"));
// testing hyperlink mod.
console.log(parcol.pit("~l GITHUB_TOKEN->https://github.com~"));
// passing the hyperlink to a variable
const link = parcol.pit("~l github->https://github.com~");
console.log(link);
// hidden and visible text, not working :)
const your_secret_key = parcol.pit("~h 1234~");
const your_public_key = parcol.pit(`~rs ${your_secret_key}~`);
console.log("your keys: ", your_secret_key, your_public_key);
// testing visibility
console.log(parcol.pit("~v 1234~"));
// testing custom, type
const p = new Parcol("'");
console.log(p.pit("'b selamlar'"));
// not mods
// Mods: "b", "d", "h", "in", "it", "o", "rs", "st", "u", "v", "hex", "bghex", "ans", "bgans", "l", "rgb", "bgrgb"
const colorsId = [
    // COLORS
    "bc", "bl", "c", "g", "m", "r", "y", "w",
    // BRIGHT_COLORS
    "bcb", "blb", "cb", "gb", "mb", "rb", "yb", "wb",
    // BG_COLORS
    "bgbc", "bgbl", "bgc", "bgg", "bgm", "bgr", "bgy", "bgw",
    // BG_BRIGHT_COLORS
    "bbcb", "bblb", "bcb", "bgb", "bmb", "brb", "byb", "bwb",
];
function test_all_colors() {
    let allColorKeys = colorsId.join(",");
    console.log(parcol.pit("~blb All Colors: ~", allColorKeys));
    console.log(parcol.pit(`~${allColorKeys} testing all color!!!~`));
}
function testing_step_by_step_all_colors() {
    colorsId.forEach(colorKey => {
        console.log(parcol.pit(`~${colorKey} ${colorKey}~`));
    });
}
function start_test() {
    test_all_colors();
    testing_step_by_step_all_colors();
}
start_test();
