import * as React from 'react';
import { Appbar } from 'react-native-paper';
import isDarkMode from './CheckDarkMode';

interface AppBarComponentProps {
    title: string;
}
const fdshg = isDarkMode();
const AppBarComponent: React.FC<AppBarComponentProps> = ({ title }) => {
    return (
        <Appbar.Header>
            <Appbar.Content title={title} />
        </Appbar.Header>
    );
};

export default AppBarComponent;