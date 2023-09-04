import React from 'react';

import { categories } from './CategoriesData';
import CategoryBox from './CategoryBox';
import { useSearchParams } from 'react-router-dom';

const Categories = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')

    return (

        <div className='pt-4 flex flex-row items-center justify-center gap-4 lg:gap-8 overflow-x-auto'>
            {categories.map(item => (
                <CategoryBox
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    selected={category === item.label}
                />
            ))}
        </div>



    );
};

export default Categories;

