import {Text, View} from "react-native"

// components
import {WorkoutCard} from "@strongr/components/WorkoutCard/WorkoutCard"

// fixgures
import {warmup} from "@strongr/fixtures/workouts"

// hooks
import {useStore} from "@strongr/store/store"

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
