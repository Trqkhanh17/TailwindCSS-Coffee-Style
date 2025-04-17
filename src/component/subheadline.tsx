
type Props = {
    title: String
}
const Subheadline = ({ title }: Props) => {
    return (
        <div className="ct-subheadline">
            <div className="ct-subheadline-deco-line"></div>
            <div className="ct-subheadline-label">{title}</div>
            <div className="ct-subheadline-deco-line"></div>
        </div>
    )
}

export default Subheadline;