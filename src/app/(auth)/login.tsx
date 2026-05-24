import MainWrapper from "@/components/mainWrapper"
import { Text } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'


export default function login() {
  return (
    <SafeAreaView>
      <MainWrapper>
        <Text>Login</Text>
      </MainWrapper>
    </SafeAreaView>
  )
}