import { IoMdVolumeHigh } from 'react-icons/io'

const EngText = ({ children }) => {
  return (
    <div className="audio peer text-yellow-900">
      <div className="inline-flex items-center">
        <IoMdVolumeHigh className="peer mr-2 size-[1.1rem] cursor-pointer hover:text-red-500" />
        <span className="peer-hover:text-red-500">{children}</span>
      </div>
    </div>
  )
}
export default EngText
