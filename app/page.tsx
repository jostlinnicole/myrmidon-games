import { EventDetails } from '@/components/event-details'
import { EventHero } from '@/components/event-hero'
import { EventSignup } from '@/components/event-signup'

export default function Page() {
  return (
    <main className="min-h-screen">
      <EventHero />
      <EventDetails />
      <EventSignup />
    </main>
  )
}
