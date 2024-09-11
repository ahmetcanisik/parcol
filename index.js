var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Parcol_key;
import chalk from "chalk";
// @ts-ignore: Show this old man some respect!
import hyperlinker from 'hyperlinker';
/* type RGBType = Array<number>;

Functions to handle colors
const getRGB = (m: MessageType): RGBType => {
    const s: Array<string> = m.split(",");
    if (Array.isArray(s) && s.length === 3) {
        const [r, g, b]: RGBType = s.map(mes => Number(mes));
        return [r, g, b];
    }
    return [0, 0, 0]; // Default to black if invalid
};

const isAnsi256 = (m: MessageType): number => {
    const num: number = Number(m);
    if (typeof num === "number" && num <= 256 && num >= 0) {
        return num;
    }
    return 0; // Default to 0 if invalid
};*/
// Colors and formatting
const COLORS = [
    { id: "bc", method: (m) => chalk.black(m) },
    { id: "bl", method: (m) => chalk.blue(m) },
    { id: "c", method: (m) => chalk.cyan(m) },
    { id: "g", method: (m) => chalk.green(m) },
    { id: "m", method: (m) => chalk.magenta(m) },
    { id: "r", method: (m) => chalk.red(m) },
    { id: "y", method: (m) => chalk.yellow(m) },
    { id: "w", method: (m) => chalk.white(m) },
];
const BRIGHT_COLORS = [
    { id: "bcb", method: (m) => chalk.blackBright(m) },
    { id: "blb", method: (m) => chalk.blueBright(m) },
    { id: "cb", method: (m) => chalk.cyanBright(m) },
    { id: "gb", method: (m) => chalk.greenBright(m) },
    { id: "mb", method: (m) => chalk.magentaBright(m) },
    { id: "rb", method: (m) => chalk.redBright(m) },
    { id: "yb", method: (m) => chalk.yellowBright(m) },
    { id: "wb", method: (m) => chalk.whiteBright(m) },
];
const BG_COLORS = [
    { id: "bgbc", method: (m) => chalk.bgBlack(m) },
    { id: "bgbl", method: (m) => chalk.bgBlue(m) },
    { id: "bgc", method: (m) => chalk.bgCyan(m) },
    { id: "bgg", method: (m) => chalk.bgGreen(m) },
    { id: "bgm", method: (m) => chalk.bgMagenta(m) },
    { id: "bgr", method: (m) => chalk.bgRed(m) },
    { id: "bgy", method: (m) => chalk.bgYellow(m) },
    { id: "bgw", method: (m) => chalk.bgWhite(m) },
];
const BG_BRIGHT_COLORS = [
    { id: "bbcb", method: (m) => chalk.bgBlackBright(m) },
    { id: "bblb", method: (m) => chalk.bgBlueBright(m) },
    { id: "bcb", method: (m) => chalk.bgCyanBright(m) },
    { id: "bgb", method: (m) => chalk.bgGreenBright(m) },
    { id: "bmb", method: (m) => chalk.bgMagentaBright(m) },
    { id: "brb", method: (m) => chalk.bgRedBright(m) },
    { id: "byb", method: (m) => chalk.bgYellowBright(m) },
    { id: "bwb", method: (m) => chalk.bgWhiteBright(m) },
];
const MODS = [
    { id: "b", method: (m) => chalk.bold(m) },
    { id: "d", method: (m) => chalk.dim(m) },
    { id: "h", method: (m) => chalk.hidden(m) },
    { id: "in", method: (m) => chalk.inverse(m) },
    { id: "it", method: (m) => chalk.italic(m) },
    { id: "o", method: (m) => chalk.overline(m) },
    { id: "rs", method: (m) => chalk.reset(m) },
    { id: "st", method: (m) => chalk.strikethrough(m) },
    { id: "u", method: (m) => chalk.underline(m) },
    { id: "v", method: (m) => chalk.visible(m) },
    { id: "l", method: (m) => {
            const [text, link] = m.split('->').map(part => part.trim());
            return hyperlinker(text, link);
        } },
    /*{ id: "^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$", method: (m: MessageType) => chalk.hex(m) },
    { id: "^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$", method: (m: MessageType) => chalk.bgHex(m) },
    { id: "^\\(\\d+\\)$", method: (m: MessageType) => chalk.ansi256(isAnsi256(m)) },
    { id: "^\\(\\d+\\)$", method: (m: MessageType) => chalk.bgAnsi256(isAnsi256(m)) },
    { id: "^<http(?:s)?://[^>]+>$", method: (m: MessageType) => {
        const [text, link] = m.split('->').map(part => part.trim());
        return hyperlinker(text, link);
    }},
    { id: "^\\(\\d+,\\s*\\d+,\\s*\\d+\\)$", method: (m: MessageType) => {
        const [r, g, b]: RGBType = getRGB(m);
        return chalk.rgb(r, g, b);
    }},
    { id: "^\\(\\d+,\\s*\\d+,\\s*\\d+\\)$", method: (m: MessageType) => {
        const [r, g, b]: RGBType = getRGB(m);
        return chalk.bgRgb(r, g, b);
    }},*/
];
export class Parcol {
    constructor(key) {
        _Parcol_key.set(this, "~");
        __classPrivateFieldSet(this, _Parcol_key, key, "f");
    }
    /**
     * @param {string} message - The message to parse and apply formatting.
     * @returns {string} - The formatted message.
     */
    pit(...messages) {
        if (!messages || messages.length === 0) {
            return "";
        }
        const message = messages.join(" ");
        // Regular expression to match the formatting pattern
        const pattern = new RegExp(`\\${__classPrivateFieldGet(this, _Parcol_key, "f")}([^\\${__classPrivateFieldGet(this, _Parcol_key, "f")}]+?)\\s(.*?)\\${__classPrivateFieldGet(this, _Parcol_key, "f")}`, 'g');
        let result = message;
        let match;
        // Find and process each format message
        while ((match = pattern.exec(message)) !== null) {
            const [fullMatch, mods, text] = match;
            // Separate modes with commas and find corresponding methods
            const modList = mods.split(',').map(mod => mod.trim());
            // Collect all methods that match either by ID or regex
            const modMethods = [
                ...COLORS,
                ...BRIGHT_COLORS,
                ...BG_COLORS,
                ...BG_BRIGHT_COLORS,
                ...MODS
            ]
                .map(item => {
                // Apply regex matching
                if (item.id.startsWith("^") && item.id.endsWith("$")) {
                    const regex = new RegExp(item.id);
                    if (regex.test(text)) {
                        return item.method;
                    }
                }
                else if (modList.includes(item.id)) {
                    return item.method;
                }
                return null;
            })
                .filter(method => method !== null);
            if (modMethods.length === 0) {
                console.warn("No matching modification method found. Invalid modes:", modList);
            }
            let processedText = text;
            for (const modMethod of modMethods) {
                if (typeof modMethod === "function" &&
                    typeof modMethod(processedText) === "string") {
                    processedText = modMethod(processedText);
                }
            }
            // Replace the original match with the processed text
            result = result.replace(fullMatch, processedText);
        }
        return result;
    }
}
_Parcol_key = new WeakMap();
export default new Parcol("~");
