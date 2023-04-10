type ParamsValue = number | string;

export default function makeQueryParams(paramsObj: Record<string, ParamsValue | ParamsValue[]>) {
    const searchParams = new URLSearchParams();

    Object.entries(paramsObj).forEach(([key, value]) => {
        if (value instanceof Array || Array.isArray(value)) {
            value.forEach(v => {
                v && searchParams.append(key + "[]", v)
            })
        } else if (typeof value === 'string' || typeof value === 'number') {
            value && searchParams.set(key, String(value))
        }
    })

    return searchParams.toString()
}