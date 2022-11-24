import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function Head() {
  return (
    <div className='text-white bg-neutral-900 w- h-16 px-4 flex justify-between items-center'>
      <div className='flex text-4xl pl-7 flex-col items-center font-Kanit'>
        <a href='/'>Moodie</a>
      </div>
      <div className='flex items-center space-x-4'>
        <label className='hidden md:block relative'>
          <MagnifyingGlassIcon className='w-5 h-5 inset-y-2.5 left-3 absolute text-neutral-400' />
          <input
            name='pesquisa'
            type='text'
            placeholder='Pesquisa'
            className='rounded placeholder:text-neutral-400 bg-neutral-700 text-white border-none outline-none pl-10'
          />
        </label>
        <Link to='/perfil'>
          <img
            src='https://www.riopardo.rs.gov.br/fotos/c5aad4c7ac0ab370339f50299fee71d7.jpg'
            className='w-10 h-10 rounded-lg object-cover'
          />
        </Link>
      </div>
    </div>
  )
}
