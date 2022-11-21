import Album from './Album'

export default function AlbumList() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-6 gap-4'>
      <Album
        releaseYear='1996'
        coverUrl={'https://upload.wikimedia.org/wikipedia/pt/9/9c/2Pac_-_All_Eyez_on_Me.jpg'}
        title='All Eyez On Me'
      />
      <Album
        releaseYear='1995'
        coverUrl={'https://m.media-amazon.com/images/I/41dGF8GjmYL._AC_.jpg'}
        title='Me Against the World'
      />
      <Album
        releaseYear='1997'
        coverUrl={'https://m.media-amazon.com/images/I/81p0qu5sjkL.jpg'}
        title='R U Still Down?'
      />
    </div>
  )
}
