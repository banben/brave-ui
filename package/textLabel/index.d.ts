/// <reference types="react" />
import * as React from 'react';
export interface TextLabelTheme {
    fontSize?: string;
    color?: string;
    padding?: string;
    fontWeight?: string;
}
export interface TextLabelProps {
    id?: string;
    onClick?: () => void;
    theme?: {
        [textLabel: string]: TextLabelTheme;
    };
    text?: string | number;
}
declare class TextLabel extends React.PureComponent<TextLabelProps, {}> {
    render(): JSX.Element;
}
export default TextLabel;
