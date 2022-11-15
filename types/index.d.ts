import type { TypeExtnames } from './_includes/mimes';
export declare const EXTENSIONS: TypeExtnames;
export declare function ext(file: string): keyof TypeExtnames | '';
export declare function extname(file: string): string;
export declare function mimeType(filepath: string): string;
export declare function mimeList(filepath: string): string[];
