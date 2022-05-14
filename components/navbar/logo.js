import Image from 'next/image'
export default function Logo({size, textColor}) {
    const colorClass = textColor ? textColor : 'text-th-primary-dark'
    console.log('ColorClass',colorClass)

    return (
        <div className={'flex items-center flex-shrink-0 mr-6 ' + colorClass}>
            <div className=' mr-4'>
                <div className='flex bg-th-background-secondary mb-4 px-1 py-1 rounded-full'>
                    <Image
                    src="/about/scl-logo.png"
                    height={size?size:'70'}
                    width={size?size:'70'}
                    className="w-32 h-16 text-white p-2"
                    alt='Logo'
                />
                
                </div>
            </div>
            
        </div>
    )
}