import type { Metadata } from 'next';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Wyoming Advantage - Digital Asset Law & Tokenized Real Estate',
  description: 'DeedStack is structured under Wyoming\'s DAO LLC and blockchain-native digital asset statutes — among the most favorable regulatory environments for tokenized real estate in the US.',
};

export default function WyomingPage() {
  return (
    <>
      <Nav />
      <main className="pt-[100px] px-6 md:px-12 lg:px-20 pb-24" style={{ background: 'var(--snow)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-label mb-3">REGULATORY ADVANTAGE</p>
          <h1 className="text-h1 mb-6">The Wyoming Advantage</h1>
          <p className="text-body">Wyoming regulatory context and framework — coming soon.</p>
        </div>
      </main>
    </>
  );
}
