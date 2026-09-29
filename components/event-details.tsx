import Image from 'next/image'
import { CalendarDays, Gamepad2, MapPin, Users } from 'lucide-react'

const details = [
  { icon: CalendarDays, label: 'When', value: 'September 30, 2026 at 2:00\u00A0PM' },
  { icon: MapPin, label: 'Where', value: 'Myrmidon Games' },
  { icon: Users, label: "Who it's for", value: 'Everyone' },
  { icon: Gamepad2, label: 'What happens', value: 'We game!' },
]

export function EventDetails() {
  return (
    <section aria-labelledby="details-heading" className="mx-auto max-w-3xl px-6 py-16">
      <h2 id="details-heading" className="sr-only">
        Event details
      </h2>
      <figure className="mb-8 overflow-hidden rounded-lg border">
        <Image
          src="/images/myrmidon-storefront.jpeg"
          alt="The Myrmidon Games storefront, with gaming tables and shelves visible through the front windows"
          width={612}
          height={436}
          sizes="(min-width: 768px) 720px, 100vw"
          className="h-auto w-full"
          priority
        />
      </figure>
      <dl className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2">
        {details.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-4 bg-background p-6">
            <Icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <dt className="text-sm text-muted-foreground">{label}</dt>
              <dd className="mt-1 text-lg font-semibold">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  )
}
