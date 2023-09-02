import React from 'react';
import Container from '../shared/Container';
import { categories } from './CategoriesData';
import CategoryBox from './CategoryBox';
import { useSearchParams } from 'react-router-dom';

const Categories = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')

    return (

        <div className='md:sticky z-[9] top-[85px] bg-white'>
            <Container>
                <div className='pt-4 flex flex-row items-center justify-center gap-4 md:gap-8 overflow-x-auto'>
                    {categories.map(item => (
                        <CategoryBox
                            key={item.label}
                            label={item.label}
                            icon={item.icon}
                            selected={category === item.label}
                        />
                    ))}
                </div>
            </Container>
        </div>


    );
};

export default Categories;

