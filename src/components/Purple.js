export const Purple = (props) => {
    const text = <span className="purple">{props.children}</span>
    return props.strong ? (
        <strong>{text}</strong>
    ) : text;
}