import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const works = [
  {
    imgSrc: '/images/DanielSmart.png',
    title: 'Athletic Wear Shopify Store',
    tags: ['Shopify', 'eCommerce', 'Custom Apps Integration'],
    projectLink: 'https://danielsmartmfg.com/'
  },
  {
    imgSrc: '/images/Staccia.png',
    title: 'Premium Athletic Wear Shopify Store',
    tags: ['Shopify 2.0', 'eCommerce', 'Custom Functionalities'],
    projectLink: 'https://stacciathletics.com/'
  },
  {
    imgSrc: '/images/Beechtree.png',
    title: 'Women’s Fashion & Apparel Shopify Store',
    tags: ['Shopify', 'eCommerce', 'Custom Functionalities'],
    projectLink: 'https://beechtree.pk/'
  },
  {
    imgSrc: '/images/NovaCeramics.png',
    title: 'Nova Ceramics Shopify Store',
    tags: ['eCommerce', 'Shopify 2.0', 'Custom Functionalities'],
    projectLink: 'https://novaceramics.co/'
  },
  {
    imgSrc: '/images/BoltonMotors.png',
    title: 'Motorcycle Parts & Accessories Shopify Store',
    tags: ['Shopify 2.0', 'eCommerce', 'Custom Functionalities'],
    projectLink: 'https://haouje-motors-store.myshopify.com/'
  },
  {
    imgSrc: '/images/DriveGoods.png',
    title: 'DriveGoods is a Shopify Store for auto accessories.',
    tags: ['eCommerce', 'Shopify', 'Custom Functionalities'],
    projectLink: 'https://drivegoods.com/'
  },
]

const Work = () => {
  const [visibleCount, setVisibleCount] = useState(6)

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6)
  }

  return (
    <section 
      className="section pt-20 lg:pt-32"
      id="work"
    >
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.slice(0, visibleCount).map(({imgSrc, title, tags, projectLink}, key) => (
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
        {visibleCount < works.length && (
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
  )
}

export default Work