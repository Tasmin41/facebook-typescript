import { useMemo, useRef, useState } from "react";
import { debounce } from "lodash";

/** 
* @deprecated Please do not use this for now.
* This is not ready yet

**/
const useDebouncedSearch = (fetchOptions: (search?: string) => void, debounceTimeout: number) => {
    // TODO 
    // need to find an optimal solution.
    const fetchRef = useRef(0);
    const [str, setStr] = useState("");
    const [fetching, setFetching] = useState(false);

    const debounceFetcher = useMemo(() => {
        const loadOptions = (value: string) => {
            fetchRef.current += 1;
            const fetchId = fetchRef.current;

            if (fetchId !== fetchRef.current) {
                // for fetch callback order
                return;
            }
            setStr(value);
            setFetching(true);
            fetchOptions()

            // fetchOptions(value).then(newOptions => {
            //     console.log(newOptions, "fetchOptions");
            //     if (fetchId !== fetchRef.current) {
            //         // for fetch callback order
            //         return;
            //     }

            //     setStr(newOptions);
            //     setFetching(false);
            // });
        };

        return debounce(loadOptions, debounceTimeout);
    }, [fetchOptions, debounceTimeout]);


    // Return everything needed for the hook consumer
    return {
        debounceFetcher,
        str,
        fetching
    };
};

export default useDebouncedSearch;