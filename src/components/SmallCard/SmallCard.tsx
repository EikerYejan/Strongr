import {Image, Text, View} from "react-native"

// styles
import {smallCardStyles as styles} from "./styles"

interface Props {
  imageUrl: string
  subtitle: string
  title: string
}

export const SmallCard = ({imageUrl, subtitle, title}: Props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  )
}
