export interface Testimonial {
  id: number;
  quote: string;
  /** Technical-writing-focused variant of the quote, used on the TW portfolio index instead of `quote`. */
  twQuote?: string;
  name: string;
  role: string;
  avatar: string;
  tags: string[];
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: 'I’ve worked with a lot of people who can identify a problem. Fewer can take it from observation to data to stakeholder alignment to something that actually gets built and used. Meghan did all of that without formal authority over any of the people involved. If you’re looking for a UX researcher who can find the real problem under the surface problem and see it through; Meghan is the real deal.',
    name: 'John Schulz',
    role: 'Director of Implementation at Fieldguide',
    avatar: 'JonShulz.jpg',
    tags: [],
  },
  {
    id: 2,
    quote: 'She is exceptionally detail-oriented. Beyond her core responsibilities, she is highly collaborative and always brings thoughtful suggestions that improve both the product and our processes. Any team would greatly benefit from her expertise, initiative, and commitment to excellence!',
    twQuote: 'I had the pleasure of working closely with Meghan in my role as a Product Manager, where she led the creation of end-user technical documentation for my product. She is exceptionally detail-oriented and consistently delivers clear, high-quality content that enhances the user experience. Beyond her core responsibilities, she is highly collaborative and always brings thoughtful suggestions that improve both the product, the documentation, and our processes. Any team would greatly benefit from her expertise, initiative, and commitment to excellence!',
    name: 'Lexi Wagner',
    role: 'Senior Product Manager at Origami Risk',
    avatar: 'LexiWagner.jpg',
    tags: [],
  },
  {
    id: 3,
    quote: 'Meghan has a sharp eye for detail, deeply considers the customer experience, and actively advocates for what users need.  She is also an exceptional collaborator, partnering seamlessly with product managers and engineers to ensure alignment and quality across the board. Meghan is a valued team member and someone I highly recommend.',
    twQuote: 'I’ve had the pleasure of managing Meghan for nearly three years, and I can confidently say she is an outstanding technical writer. She has a sharp eye for detail and consistently produces clear, accurate, and user-focused documentation.\n\nMeghan goes beyond simply delivering content, she deeply considers the customer experience and actively advocates for what users need to successfully adopt and use the software. Whether she’s writing release notes or developing help center content, her work is thoughtful, precise, and impactful.\n\nShe is also an exceptional collaborator, partnering seamlessly with product managers, engineers, and release teams to ensure alignment and quality across the board. Meghan is a valued team member and someone I highly recommend.',
    name: 'Jamie Roddy',
    role: 'Product Documentation Manager at Origami Risk',
    avatar: 'JamieRoddy.png',
    tags: [],
  },
];

// UX-focused testimonial left out; the rest use their TW-focused quote variant.
export const TW_TESTIMONIALS: Testimonial[] = TESTIMONIALS
  .filter(t => t.name !== 'John Schulz')
  .map(t => ({ ...t, quote: t.twQuote ?? t.quote }));
