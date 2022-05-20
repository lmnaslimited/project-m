import Image from "next/image"
export default function Card({ src, title, subTitle }) {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <Image src={src} width="80" height="80" alt={title} />
        <h2 className="title-font font-medium text-2xl text-th-primary-medium">{title.toUpperCase()}
        </h2>
        <p className="leading-relaxed">{subTitle}
        </p>
      </div>
    </div>

  )
} 