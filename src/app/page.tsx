"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Crown, Handshake, Key, MessageSquare, UtensilsCrossed, Waves } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Rooms", id: "feature" },
            { name: "Amenities", id: "metric" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Palace Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Luxury Redefined"
          description="Experience unparalleled comfort and elegance at Grand Palace Hotel, where every detail is crafted for your perfect stay."
          tag="5-Star Experience"
          tagIcon={Award}
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "feature"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7168582/pexels-photo-7168582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Palace Hotel exterior at sunset"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Welcome to Excellence"
          description={[
            "For over three decades, Grand Palace Hotel has been the epitome of luxury hospitality, offering discerning travelers an extraordinary experience in the heart of the city.",
            "Our commitment to exceptional service, combined with world-class amenities and personalized attention, ensures every guest feels truly valued and pampered throughout their stay."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            },
            {
              text: "View Amenities",
              href: "metric"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Exceptional Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each designed to provide the ultimate in comfort and sophistication."
          tag="Premium Rooms"
          tagIcon={Key}
          features={[
            {
              id: "01",
              title: "Deluxe King Suite",
              description: "Spacious suite with panoramic city views, marble bathroom, and premium amenities for the discerning traveler.",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe King Suite with city view"
            },
            {
              id: "02",
              title: "Presidential Suite",
              description: "The pinnacle of luxury featuring separate living areas, dining space, and personalized butler service.",
              imageSrc: "https://images.pexels.com/photos/8089070/pexels-photo-8089070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential Suite living area"
            },
            {
              id: "03",
              title: "Executive Room",
              description: "Modern comfort with business amenities, complimentary WiFi, and access to the Executive Lounge.",
              imageSrc: "https://images.pexels.com/photos/3755585/pexels-photo-3755585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Executive Room interior"
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="World-Class Amenities"
          description="Discover our comprehensive range of luxury facilities designed to enhance every aspect of your stay."
          tag="Premium Services"
          tagIcon={Crown}
          metrics={[
            {
              id: "1",
              icon: Waves,
              title: "Spa & Wellness",
              value: "24/7"
            },
            {
              id: "2",
              icon: UtensilsCrossed,
              title: "Fine Dining",
              value: "3 Restaurants"
            },
            {
              id: "3",
              icon: "Car",
              title: "Valet Service",
              value: "Complimentary"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Hear from our valued guests about their exceptional stays at Grand Palace Hotel."
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Williams",
              role: "CEO",
              company: "Global Enterprises",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Williams"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Managing Director",
              company: "Tech Innovations",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "VP Marketing",
              company: "Luxury Brands",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Investment Partner",
              company: "Capital Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Thompson"
            },
            {
              id: "5",
              name: "Alexandra Foster",
              role: "Creative Director",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Alexandra Foster"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Hospitality Excellence"
          description="Proudly associated with the world's leading hotel brands and hospitality networks."
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/1008208/pexels-photo-1008208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/691067/pexels-photo-691067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Experience"
          description="Contact our reservations team to book your stay or learn more about our exclusive packages and amenities."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "dates",
              type: "text",
              placeholder: "Preferred Dates",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions...",
            rows: 4,
            required: false
          }}
          buttonText="Send Inquiry"
          imageSrc="https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel concierge providing personalized service"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Palace Hotel"
          columns={[
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "#"
                }
              ]
            },
            {
              items: [
                {
                  label: "Rooms & Suites",
                  href: "feature"
                },
                {
                  label: "Amenities",
                  href: "metric"
                },
                {
                  label: "Dining",
                  href: "#"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Concierge",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}