import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
import colors from "../../utils/colors"

function FavoritePassive(props: SvgProps) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.black}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}

        >
            <Path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </Svg>
    )
}

function FavoriteActive() {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill={colors.primary}
            stroke={colors.primary}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"

        >
            <Path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </Svg>
    )
}

function X(props: SvgProps) {
    return (
        <Svg
            width={13}
            height={13}
            viewBox="0 0 13 13"
            fill="none"
            {...props}
        >
            <Path
                opacity={0.2}
                d="M13 1.857L11.143 0 6.5 4.643 1.857 0 0 1.857 4.643 6.5 0 11.143 1.857 13 6.5 8.357 11.143 13 13 11.143 8.357 6.5 13 1.857z"
                fill={props.fill}
            />
        </Svg>
    )
}

function ChevronLeft(props: SvgProps) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.black}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <Path d="M15 18L9 12 15 6" />
        </Svg>

    )
}
export {
    FavoritePassive,
    FavoriteActive,
    X,
    ChevronLeft
}
