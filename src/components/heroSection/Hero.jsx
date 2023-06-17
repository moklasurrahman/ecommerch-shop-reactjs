import heroimg from '../../assets/hero (2).jpg'

const Hero = () => {
    return (
        <section className="hero max-w-screen-xl mx-auto p-4 flex flex-col lg:flex-row dark:text-slate-100 items-center">
            <div className="text my-5">
                <h1 className="text-5xl font-bold">The Ultimate <br />
                ecommerce shop</h1>
                <p className="text-2xl my-7 px-1 dark:text-slate-300 text-gray-700">CodeBook is the worlds most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
            </div>
            <div className="visual my-5 lg:max-w-xl">
                <img className="rounded-md max-h-full" src={heroimg} alt='hero img'/>
            </div>
        </section>
    )
}

export default Hero