import { RxCross2 } from "react-icons/rx";
import Modal from "../Modal/Modal";

const FilterModal = ({ isOpen, setIsOpen }) => {
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div>
                <div className="relative border-b pb-5">
                    <span className="absolute top-[-5px] rounded-full hover:bg-neutral-100 transition cursor-pointer p-3"><button onClick={closeModal}><RxCross2 /></button></span>
                    <h2 className="font-semibold text-center">Filters</h2>
                </div>
            </div>
        </Modal>
    );
};

export default FilterModal;