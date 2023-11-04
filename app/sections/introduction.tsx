import AnimatedTitle from "../animations/AnimatedTitle";

const Introduction = () => {
    return (
        <section>
            <div className="absolute top-1/3 left-1/2 transform -translate-x-3/4 -translate-y-1/2 text-white text-center landing-content">
                <AnimatedTitle
                    delay={5.0}
                    text={"I'm Alexander, an Aspiring Software Engineer."}
                    className={"mb-0 mt-500 text-left text-[40px] font-bold leading-[1.2em] tracking-tighter sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"}
                    wordSpace={"mr-[18px]"}
                    charSpace={"mr-[0.001em]"}
                />
                
            </div>
            <div style={{ height: "100vh" }}></div>
        </section>
    );
};

export default Introduction;
