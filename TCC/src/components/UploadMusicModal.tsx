import Modal from './Modal'
import type { ModalHandlers } from './Modal'

export default function UploadMusicModal(handlers: ModalHandlers) {
  return (
    <Modal {...handlers}>
      <form className='flex flex-col space-y-4'>
        <input required type='file' accept='audio/*' className='cursor-pointer' />
        <input
          required
          type='text'
          placeholder='Dê um nome a sua música'
          className='bg-neutral-700 focus:border-violet-600 rounded-md'
        />
        <select
          name='albumName'
          className='bg-neutral-700 border-neutral-600 focus:border-violet-600 rounded-md cursor-pointer'
          required
        >
          <option value='#123'>Cool Album Name</option>
          <option value='#321'>Another Album</option>
        </select>
        <button className='button-primary' type='submit'>
          Enviar
        </button>
      </form>
    </Modal>
  )
}
