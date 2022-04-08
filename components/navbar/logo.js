import Image from 'next/image'
export default function Logo({size, textColor}) {
    const colorClass = textColor ? textColor : 'text-th-primary-dark'
    console.log('ColorClass',colorClass)

    return (
        <div className={'flex items-center flex-shrink-0 mr-6 ' + colorClass}>
            <div className=' mr-4'>
                <Image
                    src="/scl-logo-161x108.jpeg"
                    height={size?size:'60'}
                    width={size?size:'60'}
                    className='rounded-full'
                />
            </div>
            <span className="font-semibold text-3xl tracking-tight">SCL</span>
        </div>
    )
}