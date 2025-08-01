import * as SystemUI from 'expo-system-ui';

export async function getbgcolour() {
    const colour = await SystemUI.getBackgroundColorAsync();
    return colour
}