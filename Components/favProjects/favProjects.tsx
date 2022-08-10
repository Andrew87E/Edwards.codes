import Image from 'next/image'

export const FavProjects: React.FC = () => {
    return(
        <section className='w-full h-5/6'>
            <div className=" flex justify-center bg-black m-10">
             <div className="rounded-lg shadow-lg bg-black max-w-sm transform transition duration-500 hover:scale-90">
                <a
                    href="https://react-team-ae-genie.herokuapp.com/"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="bg-black"
                >
                    <Image
                    className=" rounded-t-lg bg-black"
                    src="/img/thatsame1jpg.jpg"
                    height="250"
                    width="400"
                    alt="My Project "
                    />
                </a>
                <div className="p-6 bg-black">
                    <h5 className="text-gray-900 text-xl font-medium mb-2 bg-transparent">
                    Card title
                    </h5>
                    <p className="text-gray-700 text-base mb-4 bg-transparent">
                    Some quick example text to build on the card title and make up the
                    bulk of the card&apos;s content.
                    </p>
                    <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-white text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                    Button
                    </button>
                </div>
                </div>
            </div>
        </section>
    )
}

