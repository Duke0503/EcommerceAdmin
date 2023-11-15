import React from 'react';

import getProducts from '@/actions/getProducts';
import getSizes from '@/actions/getSizes';
import getColors from '@/actions/getColors';
import getCategory from '@/actions/getCategory';

// Revalidate the page on every request, purge cache & fetch latest data
export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  },
  searchParams: {
    colorId: string;
    sizeId: string;
  }
}

const CategoryPage:React.FC<CategoryPageProps> = async ({
  params,
  searchParams
}) => {
  
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div>
      CategoryPage
    </div>
  )
}

export default CategoryPage