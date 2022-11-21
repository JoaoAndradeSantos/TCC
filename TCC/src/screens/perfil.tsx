import { useState } from 'react'

import AlbumList from '../components/AlbumList'
import MusicList from '../components/MusicList'
import UploadMusicModal from '../components/UploadMusicModal'
import { PlusIcon } from '@heroicons/react/20/solid'

import type { Music } from '../services/firebase.d'

export default function Perfil() {
  const [uploadVisible, setUploadVisible] = useState(false)

  // TODO: Grab this data from Firebase
  const name = 'Artista'
  const followerCount = 1000
  const musics: Music[] = [
    {
      id: '#123',
      title: 'All Eyez On Me',
      albumId: '#321',
      albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/pt/9/9c/2Pac_-_All_Eyez_on_Me.jpg',
      views: 1000,
    },
    {
      id: '#12333',
      title: 'All Eyez On Me',
      albumId: '#321',
      albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/pt/9/9c/2Pac_-_All_Eyez_on_Me.jpg',
      views: 1000,
    },
    {
      id: '#1232311',
      title: 'All Eyez On Me',
      albumId: '#321',
      albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/pt/9/9c/2Pac_-_All_Eyez_on_Me.jpg',
      views: 1000,
    },
  ]

  return (
    <div className='bg-neutral-800 h-full'>
      <div className='relative'>
        <img
          className='w-full h-64 object-cover pointer-events-none select-none'
          src='https://via.placeholder.com/1080x400'
          alt='banner'
        />
        <div className='flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 absolute top-24 md:top-36 inset-x-0 md:inset-x-auto md:left-8'>
          <img
            src='https://via.placeholder.com/600'
            className='w-48 h-48 rounded-lg shadow-lg pointer-events-none select-none'
            alt='profile'
          />
          <div className='flex flex-col h-min bg-black/40 p-4 rounded-xl text-white'>
            <h1 className='text-4xl font-bold'>{name}</h1>
            <span className='text-lg font-semibold'>
              {followerCount.toLocaleString()} seguidores
            </span>
            <div className='flex space-x-2 mt-4'>
              <button className='w-full button-primary font-semibold'>Editar</button>
            </div>
          </div>
        </div>
      </div>
      <div className='text-white mt-52 md:mt-24 p-4'>
        <div className='flex items-center mb-4'>
          <h1 className='font-bold text-2xl'>Suas Músicas</h1>
          <button
            className='button-primary ml-4'
            onClick={() =>
              setUploadVisible(() => {
                document.body.style.overflow = 'hidden'
                return true
              })
            }
          >
            <PlusIcon className='w-5 h-5' />
          </button>
        </div>
        <MusicList data={musics} />
      </div>
      <div className='text-white mt-4 md:mt-2 p-4'>
        <div className='flex items-center mb-4'>
          <h1 className='font-bold text-2xl'>Seus Álbuns</h1>
          <button className='button-primary ml-4'>
            <PlusIcon className='w-5 h-5' />
          </button>
        </div>
        <AlbumList />
      </div>
      <UploadMusicModal visible={uploadVisible} setVisible={setUploadVisible} />
    </div>
  )
}
