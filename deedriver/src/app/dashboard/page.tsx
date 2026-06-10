import Nav from '@/components/Nav';

export default function DashboardPage() {
  return (
    <>
      <Nav />
      <main className="pt-[100px] px-6 md:px-12 lg:px-20 pb-24" style={{ background: 'var(--snow)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-label mb-3">PORTFOLIO</p>
          <h1 className="text-h1 mb-6">Your Token Dashboard</h1>
          <p className="text-body">Authenticated portfolio view — coming soon.</p>
        </div>
      </main>
    </>
  );
}
