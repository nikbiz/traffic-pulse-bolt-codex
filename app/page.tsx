import { Hero } from '@/components/home/hero';
import { ClientLogos } from '@/components/home/client-logos';
import { ProcessSteps } from '@/components/home/process-steps';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ProcessSteps />
    </>
  );
}