import { Text } from "react-native";
export function DateStyle(date){
    return <Text>{date.getFullYear()}-{date.getMonth()+1}-{date.getDate()}</Text>;
}