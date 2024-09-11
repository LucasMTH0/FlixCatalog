import { Container } from "./styles";

export function Arrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <Container
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    )
}