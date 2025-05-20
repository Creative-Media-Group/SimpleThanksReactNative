import * as React from 'react';
import { Appbar } from 'react-native-paper';

interface AppBarComponentProps {
    title: string;
}

const AppBarComponent: React.FC<AppBarComponentProps> = ({ title }) => {
    return (
        <Appbar.Header>
            <Appbar.Content title={title} />
        </Appbar.Header>
    );
};

export default AppBarComponent;