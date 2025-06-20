import { useState } from 'react';
import { PageType } from '../types';

export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    navigateTo
  };
};