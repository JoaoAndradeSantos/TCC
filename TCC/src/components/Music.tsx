import { EllipsisVerticalIcon, ShareIcon } from '@heroicons/react/20/solid'

type MusicProps = {
  coverUrl: string
  title: string
  views: number
  position?: number
}

export default function Music({ coverUrl, title, views, position }: MusicProps) {
  return (
    <div className='flex items-center p-4 hover:bg-white/10 rounded-md'>
      {position !== null && (
        <span className='text-sm font-semibold mr-4 w-6 h-6 flex items-center justify-center'>
          {position}
        </span>
      )}
      <img
        className='hidden md:block w-12 h-12 mr-4 rounded-md object-cover'
        src={coverUrl}
        alt={title}
      />
      <div className='flex flex-col'>
        <span>{title}</span>
        <span className='text-sm text-neutral-400'>{views.toLocaleString()}</span>
      </div>
      <div className='ml-auto space-x-1'>
        <button className=' rounded-lg p-1  hover:bg-white/10'>
          <EllipsisVerticalIcon className=' w-5 h-5' />
        </button>
        <button className=' rounded-lg p-1  hover:bg-white/10'>
          <ShareIcon className=' w-5 h-5' />
        </button>
      </div>
    </div>
  )
}
