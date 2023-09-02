import React from 'react';
import Container from '../shared/Container';
import { categories } from './CategoriesData';
import CategoryBox from './CategoryBox';

const Categories = () => {
    const handleCategory = (categoryName) => {
        console.log(categoryName)
    }
    return (
        <Container>
            <div className='pt-4 flex flex-row items-center justify-center gap-8 overflow-x-auto'>
                {categories.map(item => (
                    <div onClick={() => handleCategory(`${item?.label}`)} key={item.label}>
                        <CategoryBox
                            label={item.label}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Categories;