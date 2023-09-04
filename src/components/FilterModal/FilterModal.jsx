import { RxCross2 } from "react-icons/rx";
import Modal from "../Modal/Modal";
import { useState } from "react";

const FilterModal = ({ isOpen, setIsOpen }) => {
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div>
                <div className="relative pb-5">
                    <span className="absolute top-[-5px] rounded-full hover:bg-neutral-100 transition cursor-pointer p-2"><button onClick={closeModal}><RxCross2 /></button></span>
                    <h2 className="font-semibold text-center">Filters</h2>
                </div>
                <hr />
                <div className="py-5">
                    <h2 className="text-2xl font-medium">Type of place</h2>
                    <p className="text-sm mt-1">Search rooms, entire homes, or any type of place.</p>
                    <div className="join grid grid-cols-3 mt-6">
                        <button className="join-item btn btn-outline btn-active">Any Type</button>
                        <button className="join-item btn btn-outline">Room</button>
                        <button className="join-item btn btn-outline">Entire Home</button>
                    </div>
                </div>
                <hr />
                <div className="py-5">
                    <h2 className="text-2xl font-medium">Price range</h2>
                    <p className="text-sm mt-1">Nightly prices before fees and taxes</p>

                </div>
            </div>
        </Modal>
    );
};

export default FilterModal;