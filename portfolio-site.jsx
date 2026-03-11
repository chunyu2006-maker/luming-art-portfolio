import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, X, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const artworks = {
  people: [
    {
      title: "Quiet Gaze",
      size: '24" × 30"',
      medium: "Oil on canvas",
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80",
      inquirySubject: "Inquiry about Quiet Gaze",
    },
    {
      title: "Winter Watchers",
      size: '30" × 40"',
      medium: "Oil on linen",
      status: "Sold",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      inquirySubject: "Inquiry about Winter Watchers",
    },
  ],
  nature: [
    {
      title: "Blue Ridge Light",
      size: '24" × 36"',
      medium: "Oil on canvas",
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      inquirySubject: "Inquiry about Blue Ridge Light",
    },
    {
      title: "Snow Over Meadow",
      size: '20" × 24"',
      medium: "Oil on panel",
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80",
      inquirySubject: "Inquiry about Snow Over Meadow",
    },
  ],
  abstract: [
    {
      title: "Color Drift",
      size: '18" × 24"',
      medium: "Oil on canvas",
      status: "Sold",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80",
      inquirySubject: "Inquiry about Color Drift",
    },
    {
      title: "Vibrant Motion",
      size: '24" × 24"',
      medium: "Mixed media",
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
      inquirySubject: "Inquiry about Vibrant Motion",
    },
  ],
  sketch: [
    {
      title: "Study of Hands",
      size: '11" × 14"',
      medium: "Graphite on paper",
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
      inquirySubject: "Inquiry about Study of Hands",
    },
    {
      title: "Figure Sketch I",
      size: '9" × 12"',
      medium: "Charcoal on paper",
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
      inquirySubject: "Inquiry about Figure Sketch I",
    },
  ],
};

const categoryMeta = [
  { key: "people", title: "People" },
  { key: "nature", title: "Nature" },
  { key: "abstract", title: "Abstract" },
  { key: "sketch", title: "Sketch" },
];

function ArtworkModal({ artwork, onClose }) {
  if (!artwork) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 shadow"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="grid md:grid-cols-[1.6fr_0.9fr]">
            <div className="bg-neutral-100">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="h-[70vh] w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-6 md:p-8">
              <div className="space-y-3">
                <h3 className="text-3xl font-semibold text-neutral-900">{artwork.title}</h3>
                <div className="space-y-1 text-neutral-700">
                  <p><span className="font-medium">Size:</span> {artwork.size}</p>
                  <p><span className="font-medium">Medium:</span> {artwork.medium}</p>
                  <p><span className="font-medium">Status:</span> {artwork.status}</p>
                </div>
              </div>
              <a href={`#contact?subject=${encodeURIComponent(artwork.inquirySubject)}`}>
                <Button className="mt-6 w-full rounded-2xl text-base">Inquire About This Painting</Button>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ArtworkCard({ artwork, onOpen }) {
  return (
    <Card className="overflow-hidden rounded-3xl border-0 bg-white shadow-sm transition hover:shadow-lg">
      <button onClick={() => onOpen(artwork)} className="block w-full text-left">
        <div className="overflow-hidden bg-neutral-100">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="h-80 w-full object-cover"
          />
        </div>
      </button>
      <CardContent className="space-y-3 p-5">
        <div>
          <h4 className="text-2xl font-semibold text-neutral-900">{artwork.title}</h4>
          <p className="text-sm text-neutral-600">{artwork.size}</p>
          <p className="text-sm text-neutral-600">{artwork.medium}</p>
          <p className="text-sm font-medium text-neutral-800">{artwork.status}</p>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => onOpen(artwork)} variant="outline" className="flex-1 rounded-2xl">
            View Larger
          </Button>
          <a
            className="flex-1"
            href={`#contact?subject=${encodeURIComponent(artwork.inquirySubject)}`}
          >
            <Button className="w-full rounded-2xl">Inquiry</Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

function Header({ currentPage, setCurrentPage }) {
  const nav = [
    ["home", "Home"],
    ["bio", "Biography"],
    ["contact", "Contact"],
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <button onClick={() => setCurrentPage("home")} className="text-left">
          <div className="text-3xl font-bold tracking-wide text-neutral-900">Luming Niu Artwork</div>
        </button>
        <nav className="flex items-center gap-3">
          {nav.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setCurrentPage(key)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                currentPage === key
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HomePage({ setCurrentPage, setSelectedCategory }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-semibold text-neutral-900">Portfolio</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {categoryMeta.map((category) => (
          <button
            key={category.key}
            onClick={() => {
              setSelectedCategory(category.key);
              setCurrentPage("portfolio");
            }}
            className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white text-left transition hover:shadow-lg"
          >
            <img
              src={artworks[category.key][0].image}
              alt={category.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-neutral-900">{category.title}</h3>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function PortfolioPage({ selectedCategory, setSelectedCategory, onOpen }) {
  const activeCategory = useMemo(
    () => categoryMeta.find((c) => c.key === selectedCategory) || categoryMeta[0],
    [selectedCategory]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <h1 className="text-4xl font-semibold text-neutral-900">{activeCategory.title}</h1>

        <div className="flex flex-wrap gap-2">
          {categoryMeta.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                selectedCategory === category.key
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-700"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {artworks[selectedCategory].map((artwork) => (
          <ArtworkCard key={artwork.title} artwork={artwork} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}

function BiographyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-neutral-900">Biography</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
          alt="Artist portrait"
          className="h-96 w-full rounded-3xl object-cover"
        />
        <div className="space-y-5 text-neutral-700">
          <p>
            Luming Niu is a painter whose work explores expression, atmosphere, and the emotional rhythm of color.
          </p>
          <p>
            This biography section can include your artist statement, exhibitions, and background.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div id="contact" className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-neutral-900">Contact</h1>
      <p className="mt-4 text-neutral-600">
        For artwork inquiries or commissions please contact:
      </p>

      <div className="mt-8 space-y-2 text-neutral-700">
        <p><strong>Email:</strong> yourname@email.com</p>
        <p><strong>Location:</strong> Maryland, USA</p>
      </div>

      <a href="mailto:yourname@email.com?subject=Artwork%20Inquiry">
        <Button className="mt-6 rounded-2xl">Email Inquiry</Button>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-500 sm:px-6 lg:px-8">
        © 2026 Luming Niu. All rights reserved.
      </div>
    </footer>
  );
}

export default function PortfolioWebsiteDraft() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("people");
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && (
        <HomePage
          setCurrentPage={setCurrentPage}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      {currentPage === "portfolio" && (
        <PortfolioPage
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onOpen={setSelectedArtwork}
        />
      )}

      {currentPage === "bio" && <BiographyPage />}
      {currentPage === "contact" && <ContactPage />}

      <Footer />

      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </div>
  );
}
