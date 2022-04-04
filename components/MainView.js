import { useDispatch, useSelector } from 'react-redux'

import React, { useMemo } from 'react';
import {
    StyleSheet, View,
} from 'react-native';
import { useEffect } from 'react';
import { searchImagesByText } from '../network/api';
import _ from 'lodash';
import ImageListView from './ImageListView';
import HeaderView from './HeaderView';
import ModalView from './ModalView';
import { setAtLast, setImagesList, setLoading, setPageNumber } from '../store/IMSAction';
import { ActivityIndicator } from 'react-native-paper';

export default function App() {

    const dispatch = useDispatch();
    const {
        imagesList,
        searchString,
        pageNumber,
        isLoading
    } = useSelector((state) => { return state })

    const debounceCallBack = (searchString) => {
        updateResults(searchString, pageNumber);
    };

    const debounce_fun = useMemo(() => _.debounce(debounceCallBack, 1000), []);

    useEffect(() => {
        dispatch(setPageNumber(1));
        dispatch(setImagesList([]));
        dispatch(setAtLast(false));
        debounce_fun(searchString);
    }, [debounce_fun, searchString]);

    const updateResults = (searchString, pageNumber) => {
        dispatch(setLoading(true));
        searchImagesByText(searchString, pageNumber).then((data) => {

            dispatch(setLoading(false));
            if (data && data.length) {
                dispatch(setImagesList(_.uniqBy(imagesList.concat(data), 'id')));
            } else {
                dispatch(setAtLast(true));
            }
        }).catch(() => {
            dispatch(setAtLast(true));
        });
    }

    useEffect(async () => {
        dispatch(updateResults(searchString, pageNumber));
    }, [pageNumber])

    return (
        <View style={styles.container}>
            <HeaderView />
            <ModalView />
            <ImageListView />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
