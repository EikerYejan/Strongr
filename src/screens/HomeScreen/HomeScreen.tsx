import {Text, View} from "react-native"

// components
import {WorkoutCard} from "../../components/WorkoutCard/WorkoutCard"

// fixgures
import {warmup} from "../../fixtures/workouts"

// hooks
import {useStore} from "../../store/store"

// styles
import {homeScreenStyles} from "./styles"

export const HomeScreen = () => {
  const {userData} = useStore()
  const {name} = userData

  return (
    <View style={homeScreenStyles.container}>
      <View style={homeScreenStyles.anouncer}>
        <View style={homeScreenStyles.greetingWrapper}>
          <Text style={homeScreenStyles.greeting}>Hello,&nbsp;</Text>
          <Text style={homeScreenStyles.userName}>{name}</Text>
        </View>
        <Text style={homeScreenStyles.anouncerText}>Good morning.</Text>
      </View>
      <View>
        <WorkoutCard data={warmup} />
      </View>
    </View>
  )
}
