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

function Search(props: SvgProps) {
    return (
        <Svg
            width={92}
            height={92}
            viewBox="0 0 102 102"
            fill="none"
            {...props}
        >
            <Path
                d="M45.917 86.583c22.46 0 40.666-18.207 40.666-40.666 0-22.46-18.207-40.667-40.666-40.667-22.46 0-40.667 18.207-40.667 40.667s18.207 40.666 40.667 40.666zM96.75 96.75L74.638 74.638"
                stroke={props.stroke || colors.disabled}
                strokeWidth={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function Calendar(props: SvgProps) {
    return (
        <Svg
            width={98}
            height={110}
            viewBox="0 0 108 120"
            fill={props.stroke || colors.disabled}
            {...props}
        >
            <Path
                d="M95.417 12.75H89.5V.917H77.667V12.75H30.333V.917H18.5V12.75h-5.917C6.075 12.75.75 18.075.75 24.583v82.834c0 6.508 5.325 11.833 11.833 11.833h82.834c6.508 0 11.833-5.325 11.833-11.833V24.583c0-6.508-5.325-11.833-11.833-11.833zm0 94.667H12.583V48.25h82.834v59.167zm-82.834-71V24.583h82.834v11.834H12.583zm11.834 23.666h59.166v11.834H24.417V60.083zm0 23.667h41.416v11.833H24.417V83.75z"
            />
        </Svg>
    )
}

export {
    FavoritePassive,
    FavoriteActive,
    X,
    ChevronLeft,
    Search,
    Calendar
}
