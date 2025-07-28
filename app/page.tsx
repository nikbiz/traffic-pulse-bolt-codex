import { Hero } from '@/components/home/hero';
import { ClientLogos } from '@/components/home/client-logos';
import { ProcessSteps } from '@/components/home/process-steps';
import { Features } from '@/components/home/features';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ProcessSteps />
      <Features />
    </>
  );
}