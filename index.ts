import chalk from "chalk";

// @ts-ignore: Show this old man some respect!
import hyperlinker from 'hyperlinker';

type MessageType = string;
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
    { id: "bc", method: (m: MessageType) => chalk.black(m) },
    { id: "bl", method: (m: MessageType) => chalk.blue(m) },
    { id: "c", method: (m: MessageType) => chalk.cyan(m) },
    { id: "g", method: (m: MessageType) => chalk.green(m) },
    { id: "m", method: (m: MessageType) => chalk.magenta(m) },
    { id: "r", method: (m: MessageType) => chalk.red(m) },
    { id: "y", method: (m: MessageType) => chalk.yellow(m) },
    { id: "w", method: (m: MessageType) => chalk.white(m) },
];

const BRIGHT_COLORS = [
    { id: "bcb", method: (m: MessageType) => chalk.blackBright(m) },
    { id: "blb", method: (m: MessageType) => chalk.blueBright(m) },
    { id: "cb", method: (m: MessageType) => chalk.cyanBright(m) },
    { id: "gb", method: (m: MessageType) => chalk.greenBright(m) },
    { id: "mb", method: (m: MessageType) => chalk.magentaBright(m) },
    { id: "rb", method: (m: MessageType) => chalk.redBright(m) },
    { id: "yb", method: (m: MessageType) => chalk.yellowBright(m) },
    { id: "wb", method: (m: MessageType) => chalk.whiteBright(m) },
];

const BG_COLORS = [
    { id: "bgbc", method: (m: MessageType) => chalk.bgBlack(m) },
    { id: "bgbl", method: (m: MessageType) => chalk.bgBlue(m) },
    { id: "bgc", method: (m: MessageType) => chalk.bgCyan(m) },
    { id: "bgg", method: (m: MessageType) => chalk.bgGreen(m) },
    { id: "bgm", method: (m: MessageType) => chalk.bgMagenta(m) },
    { id: "bgr", method: (m: MessageType) => chalk.bgRed(m) },
    { id: "bgy", method: (m: MessageType) => chalk.bgYellow(m) },
    { id: "bgw", method: (m: MessageType) => chalk.bgWhite(m) },
];

const BG_BRIGHT_COLORS = [
    { id: "bbcb", method: (m: MessageType) => chalk.bgBlackBright(m) },
    { id: "bblb", method: (m: MessageType) => chalk.bgBlueBright(m) },
    { id: "bcb", method: (m: MessageType) => chalk.bgCyanBright(m) },
    { id: "bgb", method: (m: MessageType) => chalk.bgGreenBright(m) },
    { id: "bmb", method: (m: MessageType) => chalk.bgMagentaBright(m) },
    { id: "brb", method: (m: MessageType) => chalk.bgRedBright(m) },
    { id: "byb", method: (m: MessageType) => chalk.bgYellowBright(m) },
    { id: "bwb", method: (m: MessageType) => chalk.bgWhiteBright(m) },
];

const MODS = [
    { id: "b", method: (m: MessageType) => chalk.bold(m) },
    { id: "d", method: (m: MessageType) => chalk.dim(m) },
    { id: "h", method: (m: MessageType) => chalk.hidden(m) },
    { id: "in", method: (m: MessageType) => chalk.inverse(m) },
    { id: "it", method: (m: MessageType) => chalk.italic(m) },
    { id: "o", method: (m: MessageType) => chalk.overline(m) },
    { id: "rs", method: (m: MessageType) => chalk.reset(m) },
    { id: "st", method: (m: MessageType) => chalk.strikethrough(m) },
    { id: "u", method: (m: MessageType) => chalk.underline(m) },
    { id: "v", method: (m: MessageType) => chalk.visible(m) },
    { id: "l", method: (m: MessageType) => {
        const [text, link] = m.split('->').map(part => part.trim());
        return hyperlinker(text, link);
    }},
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
    #key: string = "~";

    constructor(key: string) {
        this.#key = key;
    }

    /**
     * @param {string} message - The message to parse and apply formatting.
     * @returns {string} - The formatted message.
     */
    pit(...messages: any) {
        if (!messages || messages.length === 0) {
            return "";
        }

        const message = messages.join(" ");

        // Regular expression to match the formatting pattern
        const pattern = new RegExp(`\\${this.#key}([^\\${this.#key}]+?)\\s(.*?)\\${this.#key}`, 'g');
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
                } else if (modList.includes(item.id)) {
                    return item.method;
                }
                return null;
            })
            .filter(method => method !== null);

            if (modMethods.length === 0) {
                console.warn("No matching modification method found. Invalid modes:", modList);
            }            

            let processedText: string = text;
            for (const modMethod of modMethods) {
                if (typeof modMethod === "function") {
                    // Apply each method in sequence
                    processedText = modMethod(processedText);
                }
            }

            // Replace the original match with the processed text
            result = result.replace(fullMatch, processedText);
        }

        return result;
    }
}

export default new Parcol("~");