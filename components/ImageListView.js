import { StyleSheet, FlatList, View, TouchableWithoutFeedback } from "react-native";
import { ActivityIndicator, Card, Paragraph, Snackbar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { setPageNumber, setSelectedItem, setShowModal } from "../store/IMSAction";

export default function ImageListView() {

    const { imagesList, isAtLast, pageNumber, isLoading } = useSelector((state) => state)
    const dispatch = useDispatch()

    const renderItem = ({ item }) => {
        const selectedItemCLick = () => {
            dispatch(setShowModal(true)); dispatch(setSelectedItem(item))
        }

        return (
            <TouchableWithoutFeedback onPress={selectedItemCLick}  >
                <Card style={styles.tile} key={item.id}>
                    <Card.Cover source={{ uri: item.previewURL }} />
                </Card>
            </TouchableWithoutFeedback>
        )
    }

    const onEndReached = () => {
        if (!isAtLast) {
            dispatch(setPageNumber(pageNumber + 1))
        }
    }

    const Loading = () => {
        return isLoading ? (
            <View >
                <ActivityIndicator size="large" color="black" />
            </View>)
            : isAtLast ? (<Paragraph>No more Images</Paragraph>) : (<></>)

    }

    return (<><FlatList
        data={imagesList.length && imagesList}
        removeClippedSubviews={true}
        renderItem={renderItem}
        onEndReachedThreshold={0.7}
        keyExtractor={(item) => item.id}
        onEndReached={onEndReached}
        style={{ marginBottom: 50 }}
        viewabilityConfig={{
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 95
        }}
    />
        <Snackbar
            visible={isAtLast}
        >
            No more Images !
        </Snackbar>
        <Loading></Loading>
    </>)
}

const styles = StyleSheet.create({
    tile: {
        margin: 10
    }
});
