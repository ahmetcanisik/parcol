import { 
    COLORS,
    BG_BRIGHT_COLORS,
    BG_COLORS,
    BRIGHT_COLORS,
    MODS
  } from "./lib/colors";

export class Parcol {
    private key: string = "~";

    constructor(key: string) {
        this.key = key;
    }

    /**
     * @param {any} messages - The message to parse and apply formatting.
     * @returns {string} - The formatted message.
     */
    pit(...messages: any) {
        if (!messages || messages.length === 0) {
            return "";
        }

        const message = messages.join(" ");

        // Regular expression to match the formatting pattern
        const pattern = new RegExp(`\\${this.key}([^\\${this.key}]+?)\\s(.*?)\\${this.key}`, 'g');
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

            let processedText: any = text;
            for (const modMethod of modMethods) {
                if (
                    typeof modMethod === "function" &&
                    typeof modMethod(processedText) === "string"
                ) {
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