
const ProductDetail = () => {
    return (
        <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <img
                            alt="Les Paul"
                            src="https://giayxshop.vn/wp-content/uploads/2023/03/z4159595927783_c64c2be5885dd21738773ad31d1539ba-600x600.jpg"
                            className="aspect-square w-full rounded-xl object-cover"
                        />

                    </div>

                    <div className="sticky top-0">
                        <div className="mt-8 flex justify-between">
                            <div className="max-w-[35ch] space-y-2">
                                <h1 className="text-xl font-bold sm:text-2xl">
                                    Fun Product That Does Something Cool
                                </h1>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-base text-gray-500 line-through"> 500.000đ </p>
                            <p className="tracking-wider text-red-500 font-bold text-lg">400.000đ</p>
                        </div>
                        <div className="mt-4">
                            <div className="prose max-w-none">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    veniam dicta beatae eos ex error culpa delectus rem tenetur,
                                    architecto quam nesciunt, dolor veritatis nisi minus inventore,
                                    rerum at recusandae?
                                </p>
                            </div>
                        </div>

                        <form className="mt-8">
                            <fieldset className="mt-4">
                                <legend className="mb-1 text-sm font-medium">Size</legend>

                                <div className="flex flex-wrap gap-1">
                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_xs"
                                            className="peer sr-only"
                                        />

                                        <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            XS
                                        </span>
                                    </label>

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_s"
                                            className="peer sr-only"
                                        />

                                        <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            S
                                        </span>
                                    </label>

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_m"
                                            className="peer sr-only"
                                        />

                                        <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            M
                                        </span>
                                    </label>

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_l"
                                            className="peer sr-only"
                                        />

                                        <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            L
                                        </span>
                                    </label>

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_xl"
                                            className="peer sr-only"
                                        />
                                        <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            XL
                                        </span>
                                    </label>
                                </div>
                            </fieldset>

                            <div className="mt-8 flex gap-4">
                                <button
                                    type="submit"
                                    className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
        </section>

    )
}

export default ProductDetail