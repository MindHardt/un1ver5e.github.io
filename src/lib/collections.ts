export function* distinctBy<T, TKey>(values: Iterable<T>, selector: (el : T) => TKey) : Iterable<T> {
    const duplicates = new Set<TKey>();
    for (const value of values) {
        const key = selector(value);
        if (!duplicates.has(key)) {
            duplicates.add(key);
            yield value;
        }
    }
}

export function* distinct<T>(values: Iterable<T>) : Iterable<T> {
    return distinctBy(values, e => e);
}