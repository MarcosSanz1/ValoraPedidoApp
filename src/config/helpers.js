import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

export const loadImageGallery = async(size) => {
    const response = { status: false, image: null}
    const resultPermissions = await Permissions.askAsync(Permissions.CAMERA)

    if (resultPermissions.status === "denied") {
        Alert.alert("Debes de dar permisos, para acceder a las imágenes de la galeria")
        return response
    }
    const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: size
    })
    if (result.cancelled) { return response }
    response.status = true
    response.image = result.uri
    console.log("response.image", response.image)
    return response
}

export const fileToBlob = async(path) => {
    const file = await fetch(path)
    const blob = await file.blob()
    return blob
}