import { useState } from "react";

// const useHover = () => {
// const [showText, setShowText] = useState(false)
// const onHoverProps = {
//     onmouseenter: () => setShowText(true),
//     onmouseleave: () => setShowText(false),
// }
// return [showText, onHoverProps]
// }

export const Intro: React.FC = () => {
//  const [textIsHovering, TextHoverProps] = useHover()
//  {textIsHovering ? 'I building web apps!' : 'Hi,'}
//  {...useHover}

    return (
        <main className="">
            <section className="inline-flex bg-black drop-shadow-md min-h-min border mr-1 overflow-hidden min-w-min">
                <article className="text-white">
                    <h1 className="text-white text-9xl ae-intro-text">
                        Hi,
                    </h1>
                    <h2 className="text-white text-8xl ae-intro-text">
                        Check Out My Work!
                    </h2>
                </article>

            </section>

        </main>
    );
};
