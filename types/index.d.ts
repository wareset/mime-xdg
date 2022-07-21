import { TypeExtnames } from './lib/mimes';
declare const EXTENSIONS: TypeExtnames;
declare const MIME_TYPES: {
    [K in typeof MIME_TYPES[number]]: {
        [key: string]: true;
    };
};
export { EXTENSIONS, MIME_TYPES };
export declare const ext: (file: string) => keyof TypeExtnames | '';
export declare const extname: (filepath: string) => string;
export declare const mime: (filepath: string) => string;
export declare const mimeList: (filepath: string) => string[];
