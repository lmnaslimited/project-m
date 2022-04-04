import Image from 'next/image'
export default function Logo() {

    return (
        <div className="flex items-center flex-shrink-0 text-th-primary-dark mr-6">
        <div className=' mr-4'>
             <Image
            src="/scl-logo-161x108.jpeg"
            height="60"
            width="60"
            className='rounded-full'
            />
        </div>
            <span className="font-semibold text-3xl tracking-tight">SCL</span>
        </div>
    )
}