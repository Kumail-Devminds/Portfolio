import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const shopifyThemes = [
  {
    imgSrc: "/images/DanielSmart.png",
    title: "Athletic Wear Shopify Store",
    tags: [
      "Shopify 2.0",
      "Warehouse Theme",
      "Figma to Shopify",
      "Apps Integration",
      "B2B & B2C stores",
    ],
    projectLink: "https://danielsmartmfg.com/",
  },
  {
    imgSrc: "/images/Beechtree.png",
    title: "Women’s Fashion & Apparel Shopify Store",
    tags: [
      "Shopify 2.0",
      "Dawn Theme",
      "e-Commerce",
      "Custom Functionalities",
      "Apps Integration",
    ],
    projectLink: "https://beechtree.pk/",
  },
  {
    imgSrc: "/images/akgalleria.png",
    title: "Fashion & Accessories Shopify Store",
    tags: [
      "Shopify 2.0",
      "Checkout Extensibility",
      "Dawn Theme",
      "Figma to Shopify",
      "Apps Integration",
      "Marketplace",
    ],
    projectLink: "https://akgalleria.com/",
  },
  {
    imgSrc: "/images/NiSuppliments.png",
    title: "Health & Nutrition Shopify Store",
    tags: [
      "Expanse Theme",
      "Checkout Extensibility",
      "Figma to Shopify",
      "Apps Integration",
      "Shopify Plus",
    ],
    projectLink: "https://nisupplements.com/",
  },
  {
    imgSrc: "/images/Brisk.png",
    title: "Custom Apparel Shopify Store",
    tags: [
      "Shopify 2.0",
      "Symmetry Theme",
      "Advance Product Customization",
      "Figma to Shopify",
      "Apps Integration",
    ],
    projectLink: "https://www.briskshirts.com/",
  },
  {
    imgSrc: "/images/BidetBuddy.png",
    title: "Bidet Products Shopify Store",
    tags: [
      "Shopify Plus",
      "Be Yours Theme",
      "eCommerce",
      "Custom Apps Integration",
      "Apps Integration",
    ],
    projectLink: "https://www.bidetbuddy.com/",
  },
  {
    imgSrc: "/images/DriveGoods.png",
    title: "DriveGoods is a Shopify Store for auto accessories.",
    tags: [
      "Shopify 2.0",
      "Local Theme",
      "e-Commerce",
      "Custom Functionalities",
      "Apps Integration",
    ],
    projectLink: "https://drivegoods.com/",
  },
  {
    imgSrc: "/images/NovaCeramics.png",
    title: "Nova Ceramics Shopify Store",
    tags: [
      "Shopify Plus",
      "Symmetry Theme",
      "eCommerce",
      "Custom Functionalities",
      "Apps Integration",
    ],
    projectLink: "https://novaceramics.co/",
  },
  {
    imgSrc: "/images/Staccia.png",
    title: "Premium Athletic Wear Shopify Store",
    tags: [
      "Shopify Plus",
      "Vantage Theme",
      "e-Commerce",
      "Custom Functionalities",
      "Apps Integration",
    ],
    projectLink: "https://stacciathletics.com/",
  },
  {
    imgSrc: "/images/Tula.png",
    title: "Movement & Gymnastics Shopify Store",
    tags: [
      "Shopify Plus",
      "Honey Theme",
      "Figma to Shopify",
      "Apps Integration",
      "e-Commerce",
    ],
    projectLink: "https://tulastudios.com/",
  },
  {
    imgSrc: "/images/kooni.png",
    title: "Beauty & Skincare Shopify Store",
    tags: [
      "Shopify 2.0",
      "Custom Feature Development",
      "Apps Integration",
      "Advance Product Customization",
    ],
    projectLink: "https://kooniskincare.com/",
  },
  {
    imgSrc: "/images/lightpath.png",
    title: "Lighting & Electronics Shopify Store",
    tags: [
      "Shopify 2.0",
      "Refresh Theme",
      "Figma to Shopify",
      "Apps Integration",
      "E-commerce",
    ],
    projectLink: "https://lightpathled.com/",
  },
  {
    imgSrc: '/images/comfydown.png',
    title: 'Luxury Pillows & Home Comfort Shopify Store',
    tags: [
      'Shopify 2.0',
      'Ella Theme',
      'Figma to Shopify',
      'Apps Integration',
      'e-Commerce'
    ],
    projectLink: 'https://comfydown.com/',
  },
  {
    imgSrc: '/images/leaderkid.png',
    title: 'Baby & Kids Fashion Shopify Store',
    tags: [
      'Shopify 2.0',
      'Dawn Theme',
      'Figma to Shopify',
      'Apps Integration',
      'e-Commerce'
    ],
    projectLink: 'https://leader-kids.com/',
  },
  {
    imgSrc: '/images/pierremason.png',
    title: 'Luxury Fashion & Accessories Shopify Store',
    tags: [
      'Shopify 2.0',
      'Dawn Theme',
      'Figma to Shopify',
      'Custom Functionalities',
      'e-Commerce'
    ],
    projectLink: 'https://pierremason.com/',
  },
  {
    imgSrc: '/images/shopfreunds.png',
    title: 'Fashion & Lifestyle Shopify Store',
    tags: [
      'Custom Theme Development',
      'Figma to Shopify',
      'Apps Integration',
      'Shopify Plus',
      'e-Commerce'
    ],
    projectLink: 'https://www.shopfreunds.com/',
  },
  {
    imgSrc: '/images/woodpeckerscrafts.png',
    title: 'Handmade Wooden Products Shopify Store',
    tags: [
      'Shopify 2.0',
      'Symmetry Theme',
      'Figma to Shopify',
      'Apps Integration',
      'e-Commerce'
    ],
    projectLink: 'https://woodpeckerscrafts.com/',
  }
];

const shopifyApps = [
  {
    imgSrc: "/images/CheckoutCatalyst.png",
    title: "Checkout Catalyst",
    tags: [
      "Shopify App",
      "Checkout Extension",
      "Discounts",
      "Cart Customization",
    ],
    projectLink: "https://apps.shopify.com/checkout-catalyst",
  },
];

const WorkTabs = () => {
  const [activeTab, setActiveTab] = useState("themes");
  const [visibleCount, setVisibleCount] = useState(6);

  const activeBox = useRef();
  const tabRefs = {
    themes: useRef(),
    apps: useRef(),
  };

  const initActiveBox = (tab = activeTab) => {
    const el = tabRefs[tab].current;
    if (!el) return;
    activeBox.current.style.left = el.offsetLeft + "px";
    activeBox.current.style.width = el.offsetWidth + "px";
    activeBox.current.style.height = el.offsetHeight + "px";
  };

  useEffect(() => {
    initActiveBox();
    const handleResize = () => initActiveBox();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    initActiveBox(activeTab);
    setVisibleCount(6);
    ScrollTrigger.refresh();
  }, [activeTab]);

  const projects = activeTab === "themes" ? shopifyThemes : shopifyApps;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  return (
    <section className="section pt-20 lg:pt-32 min-h-[80vh]" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <nav className="flex gap-6 mb-8 relative">
          <a
            href="#"
            ref={tabRefs.themes}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("themes");
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "themes"
                ? "bg-zinc-50 text-zinc-900"
                : "text-zinc-50/50 hover:text-zinc-50"
            }`}
          >
            Shopify Themes
          </a>

          <a
            href="#"
            ref={tabRefs.apps}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("apps");
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "apps"
                ? "bg-zinc-50 text-zinc-900"
                : "text-zinc-50/50 hover:text-zinc-50"
            }`}
          >
            Shopify Apps
          </a>

          <div
            className="active-box absolute bg-zinc-50 rounded-lg -z-10 transition-[left,width] duration-500"
            ref={activeBox}
          ></div>
        </nav>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {projects
            .slice(0, visibleCount)
            .map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            ))}
        </div>

        {visibleCount < projects.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 flex items-center gap-2 rounded-xl bg-sky-400 text-zinc-950 font-medium hover:bg-sky-500 transition-colors"
            >
              Show More
              <span className="material-symbols-rounded" aria-hidden="true">
                arrow_downward
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkTabs;
