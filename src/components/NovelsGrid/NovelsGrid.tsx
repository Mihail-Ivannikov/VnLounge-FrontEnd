import React from 'react';
import './NovelsGrid.css';

interface NovelsGridProps<T> {
  data: T[]; // General data array of any type
  CardComponent: React.ElementType; // Accept a Card component to render each item
  gridTemplateColumns?: string; // Customize number of columns in the grid
  gap?: string; // Customize gap between grid items
}

const NovelsGrid = <T,>({
  data,
  CardComponent,
  gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))', // Default grid columns
  gap = '20px', // Default gap
}: NovelsGridProps<T>) => {
  return (
    <section className='novels-grid-wrapper'>
      <h2 className='novels-grid-title'>Top Rated Novels</h2>
      <div
        className='novels-grid'
        style={{
          gridTemplateColumns: gridTemplateColumns,
          gap: gap,
        }}
      >
        {data.map((item, index) => (
          <CardComponent key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default NovelsGrid;
