import Nav from '@/components/Nav';

export default function CalculatorPage() {
  return (
    <>
      <Nav />
      <main className="pt-[100px] px-6 md:px-12 lg:px-20 pb-24" style={{ background: 'var(--snow)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-label mb-3">EQUITY CALCULATOR</p>
          <h1 className="text-h1 mb-6">Calculate Your Yield</h1>
          <p className="text-body">Interactive yield calculator — coming soon.</p>
        </div>
      </main>
    </>
  );
}
