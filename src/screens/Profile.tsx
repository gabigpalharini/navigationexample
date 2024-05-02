import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Head from "../componentes/Head";
import Footer from "../componentes/Footer";

function Profile(): React.JSX.Element {
    return(
        <View>
          <Head/>
          <Text>Tela Perfil</Text>
          <Footer/>
        </View>
    );
}
export default Profile;