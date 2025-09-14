import React from 'react'

const aboutItems = [
  {
    label: 'Project done',
    number: 50
  },
  {
    label: 'Years of experience',
    number: 4
  }
];

const About = () => {
  return (
    <section 
        className="section pt-20 lg:pt-32" id="about"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl
            md:p-12 reveal-up">
                <p className="text-zinx-300 mb-4 md:mb-8md:text-xl md:max-w-[60ch]">
                    I’m Hafiz Muhammad Kumail, a Senior Shopify Full-Stack Developer with 4+ years of experience. I specialize in building high-performing Shopify stores and apps that deliver seamless shopping experiences. My expertise spans Shopify theme development with HTML, CSS, Liquid, and JavaScript, as well as app development using React, Redux, Tailwind, Polaris, Node.js, Express.js, and MongoDB. With proven experience across leading brands and agencies, I combine technical precision with creative problem-solving to bring ideas to life and add real value to every project.
                </p>
                <div className="flex flex-wrap items-center gap-4
                md:gap-7">
                    {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center
                                md:mb-2">
                                    <span className="text-2xl font-semibold
                                    md:text-4xl">{number}</span>
                                    <span className="text-sky-400
                                    font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img 
                        src="/images/logo.svg" 
                        alt="Logo" 
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]" 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
