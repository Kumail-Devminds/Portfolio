import React from 'react'
import SkillCard from './SkillCard'

const skillItem = [
  {
    imgSrc: '/images/html-5.svg',
    label: 'HTML',
    desc: 'Markup Language'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  // {
  //   imgSrc: '/images/liquid.png',
  //   label: 'Liquid',
  //   desc: 'Shopify Templating'
  // },
  {
    imgSrc: '/images/shopify.svg',
    label: 'Shopify',
    desc: 'eCommerce Platform'
  },
  {
    imgSrc: '/images/json.svg',
    label: 'JSON',
    desc: 'Data Format'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'Express.js',
    desc: 'Framework for Node.js'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/github.svg',
    label: 'GitHub',
    desc: 'Code collaboration platform'
  },
  {
    imgSrc: '/images/Git.svg',
    label: 'Git',
    desc: 'Version Control System'
  },
  {
    imgSrc: '/images/api-interface.svg',
    label: 'APIs',
    desc: 'Integrations'
  },
  {
    imgSrc: '/images/vercel.svg',
    label: 'Vercel',
    desc: 'Seamless Web Deployments'
  },
  {
    imgSrc: '/images/Debugging.svg',
    label: 'Testing',
    desc: 'Debug & QA'
  },
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
];

const Skill = () => {
  return (
    <section className="section pt-20 lg:pt-32">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) => 
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            className="reveal-up"
                        />
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default Skill
