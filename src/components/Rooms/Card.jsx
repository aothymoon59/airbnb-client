import HeartButton from '../Button/HeartButton'
import { FaStar } from 'react-icons/fa'

const Card = ({ room }) => {

    const { location, dateRange, price, image } = room || {}
    return (
        <div className='col-span-1 cursor-pointer group'>
            <div className='flex flex-col w-full'>
                <div
                    className='aspect-square w-full relative overflow-hidden rounded-xl'
                >
                    <img
                        className='object-cover h-full w-full group-hover:scale-110 transition'
                        src={image}
                        alt='Room'
                    />
                    <div
                        className='absolute top-3 right-3'
                    >
                        <HeartButton />
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='font-semibold text-lg'>{location}</div>
                    <div className='flex items-center gap-1'><FaStar /> 5.0</div>
                </div>
                <div className='font-light text-neutral-500'>
                    Stay with Amelia
                </div>
                <div className='font-light text-neutral-500'>
                    {dateRange}
                </div>
                <div className='flex flex-row items-center gap-1'>
                    <div className='font-semibold'>$ {price}</div>
                    <div className='font-light'>night</div>
                </div>
            </div>
        </div>
    )
}

export default Card