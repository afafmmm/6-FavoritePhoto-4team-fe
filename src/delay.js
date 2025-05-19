export function delay(count) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Loading...")
        },count)
    })
}