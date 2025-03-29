import chalk from "chalk";
import terminalLink from "terminal-link";
import { ColorType, MessageType } from "./types";


// Colors and formatting
export const COLORS: ColorType[] = [
    { id: "bc", method: (m: MessageType) => chalk.black(m) },
    { id: "bl", method: (m: MessageType) => chalk.blue(m) },
    { id: "c", method: (m: MessageType) => chalk.cyan(m) },
    { id: "g", method: (m: MessageType) => chalk.green(m) },
    { id: "m", method: (m: MessageType) => chalk.magenta(m) },
    { id: "r", method: (m: MessageType) => chalk.red(m) },
    { id: "y", method: (m: MessageType) => chalk.yellow(m) },
    { id: "w", method: (m: MessageType) => chalk.white(m) },
];

export const BRIGHT_COLORS: ColorType[] = [
    { id: "bcb", method: (m: MessageType) => chalk.blackBright(m) },
    { id: "blb", method: (m: MessageType) => chalk.blueBright(m) },
    { id: "cb", method: (m: MessageType) => chalk.cyanBright(m) },
    { id: "gb", method: (m: MessageType) => chalk.greenBright(m) },
    { id: "mb", method: (m: MessageType) => chalk.magentaBright(m) },
    { id: "rb", method: (m: MessageType) => chalk.redBright(m) },
    { id: "yb", method: (m: MessageType) => chalk.yellowBright(m) },
    { id: "wb", method: (m: MessageType) => chalk.whiteBright(m) },
];

export const BG_COLORS: ColorType[] = [
    { id: "bgbc", method: (m: MessageType) => chalk.bgBlack(m) },
    { id: "bgbl", method: (m: MessageType) => chalk.bgBlue(m) },
    { id: "bgc", method: (m: MessageType) => chalk.bgCyan(m) },
    { id: "bgg", method: (m: MessageType) => chalk.bgGreen(m) },
    { id: "bgm", method: (m: MessageType) => chalk.bgMagenta(m) },
    { id: "bgr", method: (m: MessageType) => chalk.bgRed(m) },
    { id: "bgy", method: (m: MessageType) => chalk.bgYellow(m) },
    { id: "bgw", method: (m: MessageType) => chalk.bgWhite(m) },
];

export const BG_BRIGHT_COLORS: ColorType[] = [
    { id: "bbcb", method: (m: MessageType) => chalk.bgBlackBright(m) },
    { id: "bblb", method: (m: MessageType) => chalk.bgBlueBright(m) },
    { id: "bcb", method: (m: MessageType) => chalk.bgCyanBright(m) },
    { id: "bgb", method: (m: MessageType) => chalk.bgGreenBright(m) },
    { id: "bmb", method: (m: MessageType) => chalk.bgMagentaBright(m) },
    { id: "brb", method: (m: MessageType) => chalk.bgRedBright(m) },
    { id: "byb", method: (m: MessageType) => chalk.bgYellowBright(m) },
    { id: "bwb", method: (m: MessageType) => chalk.bgWhiteBright(m) },
];

export const MODS: ColorType[] = [
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
        return terminalLink(text, link);
    }},
];