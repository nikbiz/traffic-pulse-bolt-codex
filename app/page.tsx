import { Hero } from '@/components/home/hero';
import { ClientLogos } from '@/components/home/client-logos';
import { ProcessSteps } from '@/components/home/process-steps';
import { Features } from '@/components/home/features';
import { TestimonialsSection } from '@/components/home/testimonials';

export default function Home() {
  const testimonials = [
    {
      author: {
        name: 'Sarah Johnson',
        handle: '@sarahbiz',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      },
      text: 'TrafficPulse increased our qualified leads by 300% in just 3 months. The ROI has been incredible for our small business.',
    },
    {
      author: {
        name: 'Mike Chen',
        handle: '@mikectech',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      },
      text: 'The automated workflows saved us 20 hours per week while generating more leads than we ever thought possible.',
    },
    {
      author: {
        name: 'Lisa Rodriguez',
        handle: '@lisadesigns',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      },
      text: 'Finally, a marketing solution that actually works for small businesses. Our conversion rate doubled in the first month.',
    },
    {
      author: {
        name: 'David Park',
        handle: '@davidconsult',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      },
      text: "The team's expertise in lead generation is unmatched. They understand small business challenges and deliver real results.",
    },
  ];
  return (
    <>
      <Hero />
      <ClientLogos />
      <ProcessSteps />
      <Features />
      <TestimonialsSection
        title="What Our Clients Say"
        description="Join dozens of companies who have scaled their marketing with TrafficPulse"
        testimonials={testimonials}
      />
    </>
  );
}