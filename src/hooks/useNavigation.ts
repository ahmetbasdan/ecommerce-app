import { NavigationProp, useNavigation as useRNNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

const useNavigation = () => {
    return useRNNavigation<NavigationProp<RootStackParamList>>()
}

export default useNavigation;