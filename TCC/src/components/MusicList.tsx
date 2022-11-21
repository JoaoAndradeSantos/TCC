import MusicDisplay from './Music'
import type { Music } from '../services/firebase.d'

type MusicListProps = {
  data: Music[]
}

export default function MusicList({ data }: MusicListProps) {
  return (
    <div className='flex flex-col space-y-2'>
      {data.map((music, index) => (
        <MusicDisplay
          key={music.id}
          position={index}
          coverUrl={music.albumCoverUrl}
          title={music.title}
          views={music.views}
        />
      ))}
    </div>
  )
}
