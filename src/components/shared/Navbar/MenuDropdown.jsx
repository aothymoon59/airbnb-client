import { AiOutlineMenu } from 'react-icons/ai'
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import Avatar from './Avatar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='relative xl:flex-1 xl:flex-shrink-0 xl:w-140'>
            <div className='flex flex-row xl:justify-end items-center gap-1'>
                {/* airbnb home btn  */}
                <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
                    Airbnb your home
                </div>

                <button className='hidden md:block p-3 hover:bg-neutral-100 transition cursor-pointer rounded-full'>
                    <HiOutlineGlobeAlt className='text-[20px]' />
                </button>

                {/* dropdown btn  */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-1/3 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <Link
                            to='/login'
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Login
                        </Link>
                        <Link
                            to='/signup'
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Sign Up
                        </Link>
                        <hr />
                        <Link
                            to='/airbnbHome'
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Airbnb your home
                        </Link>
                        <Link
                            to='/help'
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Help Center
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MenuDropdown