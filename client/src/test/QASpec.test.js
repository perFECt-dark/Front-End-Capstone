import React from 'react';
import { render, screen} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import QA from '../components/QA/QA.jsx'

const product = {
  campus: "hr-rfp",
  category: "Pants",
  created_at: "2021-08-13T14:38:44.509Z",
  default_price: "40.00",
  description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
  features: [{feature: 'Fabric', value: '100% Cotton'}, {feature: 'Cut', value: 'Skinny'}],
  id: 40346,
  name: "Morning Joggers",
  slogan: "Make yourself a morning person",
  updated_at: "2021-08-13T14:38:44.509Z",
}

describe('rendering QA page', () => {
  it('should render a page with the correct header', () => {
    render(<QA
      productInfo={product}
    />);
    const titleQA = screen.getByText('QUESTIONS & ANSWERS');
    expect(titleQA).toHaveTextContent('QUESTIONS & ANSWERS');
  });
});
