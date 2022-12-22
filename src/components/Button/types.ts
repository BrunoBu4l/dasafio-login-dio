export interface IButtonProps {
    title: string;
    valid?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IButtonStyled{
    valid?: boolean;
}