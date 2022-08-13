
export const AnimatedLetters: React.FC = () => {
  return (
    <article className="ae-intro-container">
        {"Andrew".split("").map((letter, index) => {
            return (
             <span
              key={index}
              className="transition-all cursor-default duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 text-white text-8xl ae-letters"
             >
              {letter}
             </span>
         );
        })}
        <br></br>
         {"Edwards".split("").map((letter, index) => {
            return (
             <span
              key={index}
              className="indent-7 cursor-default transition-all duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 text-white text-8xl ae-letters"
             >
              {letter}
             </span>
         );
        })}
        <br></br>
        {"Web Developer".split("").map((letter, index) => {
            return (
             <span
              key={index}
              className="cursor-default transition-all duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 text-white text-5xl ae-title-letters"
             >
              {letter}
             </span>
         );
        })}
        <br></br>
    </article>
  )
}

