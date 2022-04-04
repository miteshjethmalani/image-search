import { Modal } from 'react-native';
import { Appbar, Avatar, Card, Paragraph, Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../store/IMSAction';

export default function ModalView() {
    const { showModal, selectedItem } = useSelector((state) => state);

    const dispatch = useDispatch();
    const hideModal = () => dispatch(setShowModal(false))
    return (<Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={hideModal}
    >
        <Appbar.Header>
            <Appbar.BackAction onPress={hideModal} />
            <Avatar.Image size={100} source={{ uri: selectedItem.userImageURL || 'https://www.gravatar.com/avatar/HASH' }} />
            <Appbar.Content title={selectedItem.user} />
        </Appbar.Header>
        <Card>
            <Card.Cover theme={{ roundness: 3 }} source={{ uri: selectedItem.largeImageURL }} />
        </Card>

        <Card.Content>
            <Title>Tags</Title>
            <Paragraph>{selectedItem.tags}</Paragraph>
        </Card.Content>

    </Modal>)
}