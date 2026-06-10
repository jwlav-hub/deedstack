import type { Metadata } from 'next';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Model a Scenario - Home Equity Yield Calculator',
  description: 'Use DeedStack\'s scenario modelling tool to estimate illustrative home equity yield based on your property value and fund performance targets.',
};

export default function CalculatorPage() {
  return (
    <>
      <Nav />
      <main className="pt-[100px] px-6 md:px-12 lg:px-20 pb-24" style={{ background: 'var(--snow)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-label mb-3">EQUITY CALCULATOR</p>
          <h1 className="text-h1 mb-6">Model a Scenario</h1>
          <p className="text-body">Interactive yield calculator — coming soon.</p>
        </div>
      </main>
    </>
  );
}
