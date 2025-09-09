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
                    Welcome! This is Hafiz Muhammad Kumail, an aspired Shopify Developer 
                    with 4 years of experience in building responsive, 
                    high-performing eCommerce stores. 
                    Blending technical expertise with creative 
                    problem-solving, I craft seamless shopping experiences 
                    that boost performance and bring your brand’s vision 
                    to life. Alongside Shopify, I also work as a Front-end WebApp Developer, building modern Web applications and Shopify apps using React and Redux.
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
