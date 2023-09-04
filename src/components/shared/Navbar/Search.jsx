import { useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import FilterModal from '../../FilterModal/FilterModal';

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer xl:flex-grow-0 xl:flex-shrink-1 xl:flex-basis-auto'>

            <div className='flex flex-row items-center sm:justify-between relative'>
                <div className='pl-4'>
                    <BiSearch size={18} />
                </div>
                <div>
                    <div className='text-xs sm:text-sm font-bold sm:font-semibold px-3 sm:px-6'>Anywhere</div>
                    <div className='text-xs sm:text-sm px-3 sm:px-6 block sm:hidden'>Any Week - Add Guest</div>
                </div>
                <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                    Any Week
                </div>
                <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                    <div className='hidden sm:block'>Add Guests</div>
                    <div className='p-2 bg-rose-500 rounded-full text-white hidden sm:block'>
                        <BiSearch size={18} />
                    </div>
                    <div className='block sm:hidden absolute right-2'>
                        <button onClick={() => setIsOpen(!isOpen)} className='border border-gray-300 rounded-full p-2'>
                            <img src='https://i.ibb.co/PWmj95j/filter.png' alt="filter icon" />
                        </button>
                        <FilterModal isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search