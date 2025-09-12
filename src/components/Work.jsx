import React, { useState, useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const shopifyThemes = [
  {
    imgSrc: '/images/DanielSmart.png',
    title: 'Athletic Wear Shopify Store',
    tags: ['Shopify', 'Warehouse Theme', 'e-Commerce', 'Custom Functionalities', 'Apps Integration'],
    projectLink: 'https://danielsmartmfg.com/',
  },
  {
    imgSrc: '/images/Staccia.png',
    title: 'Premium Athletic Wear Shopify Store',
    tags: ['Shopify Plus', 'Vantage Theme', 'e-Commerce', 'Custom Functionalities', 'Apps Integration'],
    projectLink: 'https://stacciathletics.com/',
  },
  {
    imgSrc: '/images/Beechtree.png',
    title: 'Women’s Fashion & Apparel Shopify Store',
    tags: ['Shopify', 'Dawn Theme', 'e-Commerce', 'Custom Functionalities', 'Apps Integration'],
    projectLink: 'https://beechtree.pk/',
  },
  {
    imgSrc: '/images/NovaCeramics.png',
    title: 'Nova Ceramics Shopify Store',
    tags: ['Shopify Plus', 'Symmetry Theme', 'eCommerce', 'Custom Functionalities', 'Apps Integration'],
    projectLink: 'https://novaceramics.co/',
  },
  {
    imgSrc: '/images/BidetBuddy.png',
    title: 'Bidet Products Shopify Store',
    tags: ['Shopify Plus', 'Be Yours Theme', 'eCommerce', 'Custom Apps Integration', 'Apps Integration'],
    projectLink: 'https://www.bidetbuddy.com/',
  },
  {
    imgSrc: '/images/DriveGoods.png',
    title: 'DriveGoods is a Shopify Store for auto accessories.',
    tags: ['Shopify', 'Local Theme', 'e-Commerce', 'Custom Functionalities', 'Apps Integration'],
    projectLink: 'https://drivegoods.com/',
  },
];

const shopifyApps = [
  {
    imgSrc: '/images/CheckoutCatalyst.png',
    title: 'Checkout Catalyst',
    tags: ['Shopify App', 'Checkout Extension', 'Discounts', 'Cart Customization'],
    projectLink: 'https://apps.shopify.com/checkout-catalyst',
  },
];

const WorkTabs = () => {
  const [activeTab, setActiveTab] = useState('themes');
  const [visibleCount, setVisibleCount] = useState(6);
  const activeBox = useRef();
  const tabRefs = {
    themes: useRef(),
    apps: useRef(),
  };

  const initActiveBox = (tab = activeTab) => {
    const el = tabRefs[tab].current;
    if (!el) return;
    activeBox.current.style.left = el.offsetLeft + 'px';
    activeBox.current.style.width = el.offsetWidth + 'px';
    activeBox.current.style.height = el.offsetHeight + 'px';
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', () => initActiveBox());
    return () => window.removeEventListener('resize', () => initActiveBox());
  }, []);

  useEffect(() => {
    initActiveBox(activeTab);
    setVisibleCount(6);
  }, [activeTab]);

  const projects = activeTab === 'themes' ? shopifyThemes : shopifyApps;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section className="section pt-20 lg:pt-32" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <nav className="flex gap-6 mb-8 relative">
          <a
            href="#"
            ref={tabRefs.themes}
            onClick={e => {
              e.preventDefault();
              setActiveTab('themes');
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'themes'
                ? 'bg-zinc-50 text-zinc-900'
                : 'text-zinc-50/50 hover:text-zinc-50'
            }`}
          >
            Shopify Themes
          </a>

          <a
            href="#"
            ref={tabRefs.apps}
            onClick={e => {
              e.preventDefault();
              setActiveTab('apps');
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'apps'
                ? 'bg-zinc-50 text-zinc-900'
                : 'text-zinc-50/50 hover:text-zinc-50'
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
          {projects.slice(0, visibleCount).map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}

          {Array.from({ length: Math.max(0, 6 - projects.length) }).map((_, i) => (
            <div key={`placeholder-${i}`} className="invisible" />
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