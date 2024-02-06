// page.js

import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-4xl font-semibold mb-6 border-b-2 border-gray-500">Shopping List</h1>
      <ItemList />
    </div>
  );
};

export default Page;
