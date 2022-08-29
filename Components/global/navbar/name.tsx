import Image from "next/image";
import Link from "next/link";

export const Name = () => {
    return (
        <div className="list-none font-bold text-lg">
            <Link href="/">
                <span className="text-2xl flex items-center">
                    <figure className="cursor-pointer transform hover:scale-75 transition-transform duration-800 bg-transparent mt-4 p-1 animate-spin">
                        <Image
                            src="/icons/portfolio-logo.svg"
                            width="80"
                            height="60"
                            alt="That's a me!"
                        />
                    </figure>
                    {"Andrew".split("").map((letter, index) => {
                        return (
                            <span
                                key={index}
                                className="cursor-pointer transition-all duration-700 hover:duration-100 hover:scale-125 hover:translate-y-1 hover:text-lime-500 text-white ae-name ae-ranch"
                            >
                                {letter}
                            </span>
                        );
                    })}
                </span>
            </Link>
        </div>
    );
};
