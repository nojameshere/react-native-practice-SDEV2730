import { StyleSheet, Text, View } from "react-native";
import SingleRow from "./SingleRow";
import Rows from "./Rows";
import Columns from "./Columns";

export default function Combined() {
    return (
        <View>
            <SingleRow />
            <Rows />
            <Columns />
        </View>
    )
}