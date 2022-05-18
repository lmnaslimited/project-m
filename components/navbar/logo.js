import Image from 'next/image'
export default function Logo({size, textColor}) {
    const colorClass = textColor ? textColor : 'text-th-primary-dark'
    console.log('ColorClass',colorClass)

    return (
        <div className={'flex items-center flex-shrink-0 mr-6 ' + colorClass}>
            <div className=' mr-4'>
                <div className='flex bg-white mb-4 px-1 py-1 rounded-lg '>
                    <Image
                    src="/scl-logo-161x108.png"
                    height={size?size:'50'}
                    width={size?size:'50'}
                    className="w-32 h-16 text-white p-2"
                    alt='Logo'
                />
                 <Image
                    src="/scl-161x108.png"
                    height={size?size:'50'}
                    width={size?size:'50'}
                    className="w-32 h-16 text-white p-2"
                    alt='Logo'
                />
                
                </div>
            </div>
            
        </div>
    )
}