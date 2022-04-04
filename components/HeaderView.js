import { useState } from 'react';
import { Searchbar, Appbar, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchString } from '../store/IMSAction';

export default function SearchInputView() {
    const dispatch = useDispatch();
    const [showSearch, setSowSearch] = useState(false);

    const onClose = () => {
        dispatch(setSearchString(''));
        setSowSearch(false);
    }

    const { searchString } = useSelector((state) => state)
    if (!showSearch) {
        return (<Appbar.Header>
            <Appbar.Content title="Welcome!" />
            <Appbar.Action icon="magnify" onPress={() => setSowSearch(true)} />
        </Appbar.Header>)
    } else {

        return (
            <Appbar.Header >
                <Searchbar
                    keyboardType="default"
                    autoCapitalize='none'
                    value={searchString}
                    autoCorrect={false}
                    onChangeText={(text) => { dispatch(setSearchString(text)) }}
                    placeholder='Search'
                    onIconPress={onClose}
                />
            </Appbar.Header>


        )
    }
}