import { useState } from "react";
import Categories from "../Categories/Categories";
import FilterModal from "../FilterModal/FilterModal";
import Container from "../shared/Container";

const Filterbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container>
            <div className="md:flex justify-between items-center gap-3">
                <div>
                    <Categories />
                </div>
                <div>
                    <div className="hidden md:block">
                        <button onClick={() => setIsOpen(!isOpen)} className=" flex items-center gap-1 rounded-xl p-3 border border-gray-300"><img src='https://i.ibb.co/PWmj95j/filter.png' alt="filter icon" /> <span>Filters</span></button>
                        <FilterModal isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </Container>

    );
};

export default Filterbar;