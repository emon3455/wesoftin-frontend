
const Banner = () => {

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 p-2">

            <div className="order-2 md:order-1 flex flex-col justify-center max-w-xl">
                <h2 className="text-2xl md:text-3xl xl:text-5xl font-extrabold mb-4 bg-gradient-to-r  from-indigo-500  via-pink-500 to-purple-500 bg-clip-text text-transparent">Discover the Best Deals and Latest Trending Technologies with Wesoftin</h2>
                <p className="text-gray-500">
                    Welcome to wesoftin Your Gateway to Limitless knowledge gaining Adventures! Immerse Yourself in a Treasure Trove of technologies, Unleash Your Desires, and Elevate Your interest with Every Click.
                </p>
            </div>

            <div className="order-1 md:order-2">
                <img className="w-full rounded" src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            </div>

        </div>
    );
}

export default Banner;