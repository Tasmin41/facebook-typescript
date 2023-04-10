import assertString from "./assertString";

const isValidClassNameRegx = /^[_a-zA-Z-]+[_a-zA-Z0-9]*/;

export default function isValidClassName(str: string) {
    assertString(str);

    if (str.length <= 1) {
        return false;
    }

    if (/^-[-0-9]/.test(str)) {
        return false;
    }

    return (isValidClassNameRegx.test(str));
}