import { TypeExtnames } from './lib/mimes';
export declare const EXTENSIONS: TypeExtnames;
export declare const MIME_TYPES: {
    application: {
        [key: string]: true;
    };
    "zz-application": {
        [key: string]: true;
    };
    audio: {
        [key: string]: true;
    };
    text: {
        [key: string]: true;
    };
    image: {
        [key: string]: true;
    };
    model: {
        [key: string]: true;
    };
    "x-epoc": {
        [key: string]: true;
    };
    video: {
        [key: string]: true;
    };
    chemical: {
        [key: string]: true;
    };
    font: {
        [key: string]: true;
    };
    message: {
        [key: string]: true;
    };
    "flv-application": {
        [key: string]: true;
    };
    multipart: {
        [key: string]: true;
    };
    "x-conference": {
        [key: string]: true;
    };
};
export declare const ext: (file: string) => keyof TypeExtnames | '';
export declare const extname: (filepath: string) => string;
export declare const mime: (filepath: string) => string;
export declare const mimeList: (filepath: string) => string[];
