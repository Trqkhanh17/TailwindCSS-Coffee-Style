import useIsIOS from "../hook/check.ios";

interface paralaxProbs {
    img: string
}

const Parallax = (probs: paralaxProbs) => {
    const { img } = probs;
    const checkIOS = useIsIOS();
    return (
        <div className={`ct-parallax bg-cover bg-center w-full h-96 ${checkIOS ? "bg-scroll" : "bg-fixed"}`} style={{ backgroundImage: `url(${img})` }}></div>
    )
}
export default Parallax;