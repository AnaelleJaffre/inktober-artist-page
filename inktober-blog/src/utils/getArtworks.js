const files = import.meta.glob("../assets/images/artworks/*/*.{jpeg, jpg, png}", {
    eager: true,
    import: 'default',
})

const byYear = Object.groupBy(
    Object.entries(files).map(([path, src]) => {
        const name = path.split('/').at(-1)
        const [, , day, theme] = name.replace(/\.\w+$/, '').split('-')
        return {
            src,
            name,
            year: path.split('/').at(-2),
            day: Number(day.replace('day', '')),
            theme,
        }
    }),
    (artwork) => artwork.year
)

for (const year in byYear) {
    byYear[year].sort((a, b) => a.day - b.day) // chronological order for the days
}

export const years = Object.keys(byYear).sort((a, b) => b - a) // most recent year first
export const getArtworks = (year) => byYear[year]