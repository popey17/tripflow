import { View } from 'react-native'

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#ff0000' }}>
      {children}
    </View>
  )
}