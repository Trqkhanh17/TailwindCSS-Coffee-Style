
interface paralaxProbs {
    img: string
}

const Parallax = (probs: paralaxProbs) => {
    const { img } = probs;
    return (
        <div className="ct-parallax bg-cover bg-center w-full h-96 bg-fixed" style={{ backgroundImage: `url(${img})` }}></div>
    )
}
export default Parallax;