import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

interface Props {

}

interface State {

}

export default class Child extends Component<Props, State> {
    render() {
        return (
            <Text>Hello child component</Text>
        );
    }
}