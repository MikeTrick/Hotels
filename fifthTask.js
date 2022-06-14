const getUniq = arr => arr.reduce((acc, curr)=>({
    ...acc,
    [curr]: acc[curr] ? acc[curr] + 1 : 1,
}), {})

const matcher = (arr1, arr2) => {
    const uniq1 = getUniq(arr1);
    const uniq2 = getUniq(arr2);

    return Object.entries(uniq1).map(([key, value]) => {
        if (value > 1 && uniq2[key] && uniq2[key] > 1) {
            return key
        }
        return null
    }).filter(Boolean)
}