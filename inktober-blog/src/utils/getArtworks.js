const files = import.meta.glob("../assets/images/artworks/*/*.{jpeg, jpg, png}", {
    eager: true,
    import: 'default',
})

const byYear = Object.groupBy(
    Object.entries(files).map(([path, src]) => ({
        src,
        year: path.split('/').at(-2),
        name: path.split('/').at(-1),
    })),
    (artwork) => artwork.year
)

export const years = Object.keys(byYear).sort((a, b) => b - a) // recent first (higher year)
export const getArtworks = (year) => byYear[year]