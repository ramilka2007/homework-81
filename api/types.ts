export interface Link {
    _id: string,
    originalUrl: string,
    shortUrl: string
}

export interface LinkWithoutId {
    originalUrl: string,
    shortUrl: string
}