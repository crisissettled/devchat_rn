import AsyncStorage from '@react-native-async-storage/async-storage';

interface AsyncStorageData {
  key: string;
  value: string;
}

export const saveAsyncStorage = async ({key, value}: AsyncStorageData) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.warn(e, 'store AsyncStorage Data error');
  }
};

export const getAsyncStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.warn(e, 'get AsyncStorage Data error');
  }
};
