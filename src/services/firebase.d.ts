export type User = {
  name: string
  profilePhotoUrl: string
  bannerPhotoUrl: string
  albums: Album[]
}

export type Music = {
  url: string
  title: string
  views: number
}

export type Album = {
  title: string
  releaseYear: string
  coverUrl: string
  musics: Music[]
}
