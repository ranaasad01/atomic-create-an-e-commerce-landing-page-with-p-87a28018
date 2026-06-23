"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ShoppingCart, Star, ArrowRight, Truck, ShieldCheck, RotateCcw, Zap, Heart, Eye, ChevronRight, Sparkles, Check } from 'lucide-react';
import { APP_NAME, APP_TAGLINE, ACCENT } from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

// ─── Inline mock data ──────────────────────────────────────────────────────────

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    price: 129,
    originalPrice: 199,
    rating: 4.8,
    reviewCount: 2341,
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF894,1000_QL80_.jpg",
    badge: "Best Seller",
    isSale: true,
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    price: 189,
    originalPrice: undefined,
    rating: 4.9,
    reviewCount: 876,
    category: "Accessories",
    image: "http://mockberg.us/cdn/shop/files/Timelessleatherbrowngold1-original_1369211.jpg?v=1778064860",
    badge: "New",
    isNew: true,
  },
  {
    id: 3,
    name: "Ergonomic Desk Chair",
    price: 349,
    originalPrice: 499,
    rating: 4.7,
    reviewCount: 1204,
    category: "Furniture",
    image: "https://m.media-amazon.com/images/I/71aGX3PevYL.jpg",
    badge: "Sale",
    isSale: true,
  },
  {
    id: 4,
    name: "Portable Espresso Maker",
    price: 79,
    originalPrice: undefined,
    rating: 4.6,
    reviewCount: 543,
    category: "Kitchen",
    image: "https://outin.com/cdn/shop/files/5_3.webp?v=1766421702&width=2000",
    badge: undefined,
    isNew: true,
  },
  {
    id: 5,
    name: "Merino Wool Crewneck Sweater",
    price: 95,
    originalPrice: 140,
    rating: 4.8,
    reviewCount: 389,
    category: "Apparel",
    image: "https://brooksbrothers.bynder.com/match/WebName/MS01285_BLACK/ULTIMATE_MERINO_WOOL_CREWNECK_SWEATER_BLACK",
    badge: "Sale",
    isSale: true,
  },
  {
    id: 6,
    name: "Smart LED Desk Lamp",
    price: 64,
    originalPrice: undefined,
    rating: 4.5,
    reviewCount: 712,
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/715olWL+xXL._AC_UF894,1000_QL80_.jpg",
    badge: "New",
    isNew: true,
  },
];

const categories = [
  { id: 1, name: "Electronics", count: 142, image: "http://honeywellsmartlighting.com/cdn/shop/files/honeywell-h9-smart-sensing-desk-lamp-662.webp?v=1779191429", color: "from-blue-500/20 to-blue-600/5" },
  { id: 2, name: "Apparel", count: 98, image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg", color: "from-rose-500/20 to-rose-600/5" },
  { id: 3, name: "Furniture", count: 67, image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg", color: "from-amber-500/20 to-amber-600/5" },
  { id: 4, name: "Kitchen", count: 83, image: "https://anywearmp.com/cdn/shop/files/329567106_1177991352845282_782055458709480147_n.jpg?v=1684427035&width=1536", color: "from-green-500/20 to-green-600/5" },
];

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    avatar: "https://hips.hearstapps.com/hmg-prod/images/bcacfded-198f-4492-899c-da0e4457a247.jpg",
    rating: 5,
    text: "Absolutely love the quality. My headphones arrived in two days and the sound is incredible. Zest Shop is my go-to for everything now.",
    product: "Wireless Headphones",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "James T.",
    avatar: "https://s3.amazonaws.com/arc-authors/cmg/8adde958-cd42-477c-9467-0ee150778a71.png",
    rating: 5,
    text: "The leather watch exceeded every expectation. Packaging was beautiful and the craftsmanship is top-tier. Will be ordering again.",
    product: "Minimalist Watch",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Priya K.",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFjb0oGgSOYPA/profile-displayphoto-shrink_200_200/B4DZZCoiL8G8AY-/0/1744874647031?e=2147483647&v=beta&t=iz-x6HzQIMtn31vtR_7FQLb0f3k09LJMyTJzm42hHDI",
    rating: 5,
    text: "Fast shipping, honest product descriptions, and a return process that was painless. This is how online shopping should feel.",
    product: "Ergonomic Chair",
    date: "3 days ago",
  },
];

const valueProps = [
  {
    icon: Truck,
    title: "Free Shipping Over $50",
    description: "No hidden fees. Orders above $50 ship free to your door, anywhere in the US.",
  },
  {
    icon: ShieldCheck,
    title: "2-Year Warranty",
    description: "Every product is backed by our quality guarantee. If it breaks, we fix it.",
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
    description: "Changed your mind? Return anything within 30 days, no questions asked.",
  },
  {
    icon: Zap,
    title: "Same-Day Dispatch",
    description: "Order before 2 PM and your package ships the same business day.",
  },
];

const dealProducts = [
  {
    id: 7,
    name: "Bamboo Cutting Board Set",
    price: 34,
    originalPrice: 58,
    rating: 4.7,
    reviewCount: 291,
    image: "https://www.zaksurfboards.com/wp-content/uploads/2018/08/Same-Day-Dispatch.jpg",
    discount: 41,
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 22,
    originalPrice: 40,
    rating: 4.9,
    reviewCount: 1870,
    image: "https://i.etsystatic.com/16291412/r/il/6a1ce9/3582734063/il_fullxfull.3582734063_eyq1.jpg",
    discount: 45,
  },
  {
    id: 9,
    name: "Yoga Mat Premium",
    price: 48,
    originalPrice: 85,
    rating: 4.8,
    reviewCount: 634,
    image: "https://cdn.thewirecutter.com/wp-content/media/2024/07/yoga-mat-2048px-1629-3x2-1.jpg?auto=webp&quality=75&crop=4:3,smart&width=1024",
    discount: 44,
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3.5 h-3.5 ${
              star <= Math.round(rating)
                ? "text-orange-400 fill-orange-400"
                : "text-gray-200 fill-gray-200"
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-gray-500">({count.toLocaleString()})</span>
    </div>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof featuredProducts)[0];
  index: number;
}) {
  const [wishlisted, setWishlisted] = useState(false);

  const discount =
    product.originalPrice
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.10)] border border-black/5 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop";
          }}
        />
        {/* Overlay actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setWishlisted((w) => !w)}
            className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors duration-200 ${
              wishlisted
                ? "bg-rose-500 text-white"
                : "bg-white text-gray-600 hover:text-rose-500"
            }`}
            aria-label="Wishlist"
          >
            <Heart className={`w-4 h-4 ${wishlisted ? "fill-white" : ""}`} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full bg-white text-gray-600 hover:text-orange-500 flex items-center justify-center shadow-md transition-colors duration-200"
            aria-label="Quick view"
          >
            <Eye className="w-4 h-4" />
          </motion.button>
        </div>
        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${
              product.isSale
                ? "bg-orange-500 text-white"
                : "bg-gray-900 text-white"
            }`}
          >
            {product.badge}
          </div>
        )}
        {discount > 0 && (
          <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full bg-green-500 text-white text-xs font-bold">
            -{discount}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <p className="text-xs font-medium text-orange-500 uppercase tracking-wide">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
          {product.name}
        </h3>
        <StarRating rating={product.rating} count={product.reviewCount} />
        <div className="flex items-center gap-2 mt-auto pt-2">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="mt-1 w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-200 shadow-[0_2px_8px_rgba(249,115,22,0.35)]"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categoryTabs = ["All", "Electronics", "Apparel", "Furniture", "Kitchen", "Accessories"];

  const filteredProducts =
    activeCategory === "All"
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === activeCategory);

  return (
    <main className="overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-orange-50 via-white to-amber-50 pt-16">
        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-300/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold border border-orange-200">
                <Sparkles className="w-3.5 h-3.5" />
                Summer Sale
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.05] text-balance"
            >
              Fresh Finds,{" "}
              <span className="text-orange-500 relative">
                Bold Prices
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C50 3 100 1 150 3C200 5 250 7 298 4"
                    stroke="#f97316"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed max-w-md text-pretty"
            >
              Discover thousands of curated products at prices that make sense.
              From everyday essentials to standout finds, Zest Shop delivers
              quality you can feel.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base transition-colors duration-200 shadow-[0_4px_16px_rgba(249,115,22,0.4)]"
              style={{ color: "#1c0303", fontSize: "23px" }}
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#deals"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#deals")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-semibold text-base border border-black/10 transition-colors duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                View Deals
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-5 pt-2"
            >
              {[
                { label: "40k+ Happy Customers" },
                { label: "Free Returns" },
                { label: "Secure Checkout" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-1.5 text-sm text-gray-500">
                  <Check className="w-4 h-4 text-green-500" />
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — hero product collage */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative hidden lg:block"
          >
            <div className="relative grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-black/5 aspect-[3/4]"
              >
                <img
                  src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/87a28018-9657-46b5-a8d4-69bfcba3402a/images/uploaded-1782221657676-0kjfwa.png?v=1782221658646"
                  alt="Wireless Headphones"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=500&fit=crop";
                  }}
                />
              </motion.div>
              <div className="flex flex-col gap-4 pt-8">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-black/5 aspect-square"
                >
                  <img
                    src="http://mockberg.us/cdn/shop/files/Timelessleatherbrowngold1-original_1369211.jpg?v=1778064860"
                    alt="Leather Watch"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop";
                    }}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-black/5 aspect-[4/3]"
                style={{ fontSize: "19px" }}
                >
                  <img
                    src="https://m.media-amazon.com/images/I/715olWL+xXL._AC_UF894,1000_QL80_.jpg"
                    alt="Smart Desk Lamp"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=225&fit=crop";
                    }}
                  />
                </motion.div>
              </div>
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
              className="absolute -bottom-4 -left-6 bg-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-black/5 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Orders today</p>
                <p className="text-lg font-bold text-gray-900">1,284</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUE PROPS ──────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-black/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {valueProps.map((vp) => {
              const Icon = vp.icon;
              return (
                <motion.div
                  key={vp.title}
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{vp.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mt-0.5 hidden sm:block">
                      {vp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────────────────────── */}
      <section id="categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mb-10"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2">
              Browse by Category
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight text-balance">
              Find exactly what you need
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {categories.map((cat) => (
              <motion.a
                key={cat.id}
                href="#products"
                variants={scaleIn}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory(cat.name);
                  document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${cat.color} border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.10)] cursor-pointer group`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-base">{cat.name}</p>
                  <p className="text-white/70 text-xs">{cat.count} products</p>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ChevronRight className="w-4 h-4 text-white" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────────────────── */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
          >
            <div>
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2">
                Featured Products
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight text-balance">
                Handpicked for you
              </motion.h2>
            </div>
            <motion.a
              variants={fadeIn}
              href="#products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200 shrink-0"
            >
              View all products
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Category filter tabs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeIn}
            className="flex flex-wrap gap-2 mb-8"
          >
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === tab
                    ? "bg-orange-500 text-white shadow-[0_2px_8px_rgba(249,115,22,0.35)]"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Product grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(filteredProducts.length > 0 ? filteredProducts : featuredProducts).map(
              (product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ── DEALS SECTION ────────────────────────────────────────────────── */}
      <section id="deals" className="py-20 bg-gray-950 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-2">
              Limited Time
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Today&apos;s Best Deals
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 mt-3 max-w-md mx-auto text-pretty">
              Prices this good don&apos;t last. Grab these top picks before they&apos;re gone.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {dealProducts.map((deal) => (
              <motion.div
                key={deal.id}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop";
                    }}
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold">
                    -{deal.discount}% OFF
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-sm leading-snug mb-2">
                    {deal.name}
                  </h3>
                  <StarRating rating={deal.rating} count={deal.reviewCount} />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-white">${deal.price}</span>
                      <span className="text-sm text-gray-500 line-through">${deal.originalPrice}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors duration-200"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2">
              Customer Love
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight text-balance">
              40,000+ shoppers can&apos;t be wrong
            </motion.h2>
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 text-orange-400 fill-orange-400" />
                ))}
              </div>
              <span className="text-gray-600 text-sm font-medium">4.9 average across 12,000+ reviews</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.10)] border border-black/5 flex flex-col gap-4"
              >
                <div className="flex items-center gap-0.5" style={{ fontFamily: "Playfair Display", fontSize: "24px" }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-black/5">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-orange-100 shrink-0">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-400">
                      {review.product} · {review.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scaleIn}
            className="relative rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 overflow-hidden px-8 py-16 md:px-16 text-center shadow-[0_8px_48px_rgba(249,115,22,0.35)]"
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="relative"
            >
              <motion.p variants={fadeInUp} className="text-orange-100 text-sm font-semibold uppercase tracking-widest mb-3">
                Join the Club
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-balance mb-4">
                Get 15% off your first order
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-orange-100 text-base max-w-md mx-auto mb-8 text-pretty">
                Sign up for the Zest newsletter and unlock exclusive deals, early
                access to new arrivals, and members-only pricing.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                  onChange={() => {}}
                />
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl bg-white text-orange-600 font-bold text-sm hover:bg-orange-50 transition-colors duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.15)] shrink-0"
                >
                  Claim My 15%
                </motion.button>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-orange-200 text-xs mt-4">
                No spam. Unsubscribe anytime. Offer valid for new subscribers only.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}