export namespace GMLDocs {
    /**
     * This describes the saved DocFile we create.
     */
    export interface DocFile {
        functions: DocFunction[];
        variables: DocVariable[];
        fnames: FnamesParse;
    }

    export interface FnamesParse {
        InstanceVar: string[];
        Constants: string[];
        Obsolete: string[];
        ReadOnly: string[];
    }

    /**
     * Scrapped Documentation Function information.
     */
    export interface DocFunction {
        name: string;
        signature: string;
        parameters: DocParams[];
        minParameters: number;
        maxParameters: number;
        example: DocExample;
        documentation: string;
        return: string;
        link: string;
    }
    /**
     * Scrapped Documentation Variable information.
     */
    export interface DocVariable {
        name: string;
        example: DocExample;
        documentation: string;
        type: string;
        link: string;
        object: string;
        doNotAutoComplete?: boolean;
    }

    /**
     * Scrapped Documentation Parameter information.
     */
    export interface DocParams {
        label: string;
        documentation: string;
    }
    /**
     * Scrapped Documentation Example information.
     */
    export interface DocExample {
        code: string;
        description: string;
    }

    /**
     * Enum used very briefly in the `documentationImporter` to
     * differentiate functions and variables by the presence of
     * "()" in their "signature" property.
     */
    export const enum DocType {
        Function,
        Variable
    }

    export const enum SpecialDocTypes {
        Constant = '#',
        Readonly = '*',
        InstVar = '@',
        Obsolete = '&',
        Script = '!'
    }
}
