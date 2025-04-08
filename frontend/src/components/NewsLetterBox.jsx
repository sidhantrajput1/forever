function NewsLetterBox() {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className="text-center">
            <p className="text-2xl font-medium text-gray-700">
                Subscribe now & get 20% off on first order
            </p>
            <p className="text-gray-400 mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, vero.
            </p>
            <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
                <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your email" required />
                <button type="submit" className="uppercase bg-black text-white text-xs px-10 py-4 ">Subscribe</button>
            </form>
        </div>
    )
}

export default NewsLetterBox
