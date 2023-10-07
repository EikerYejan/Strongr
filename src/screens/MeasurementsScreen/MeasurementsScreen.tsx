import {ScreenWrapper} from "@strongr/components/ScreenWrapper/ScreenWrapper"
import {ScrollView, Text, TouchableOpacity, View} from "react-native"
import {measurementsScreenStyles as styles} from "./styles"
import {Icon} from "@strongr/components/Icons/Icons"
import {COLORS} from "@strongr/constants/colors"

interface Item {
  key: string
  label: string
  value: string
  unit?: "kg" | "cm" | "%" | "kcal"
}

export const MeasurementsScreen = () => {
  const options: Record<string, Item[]> = {
    Core: [
      {
        key: "weight",
        label: "Weight",
        value: "100",
        unit: "kg"
      },
      {
        key: "body_fat",
        label: "Body Fat",
        value: "100",
        unit: "%"
      },
      {
        key: "caloric_intake",
        label: "Caloric Intake",
        value: "100",
        unit: "kcal"
      }
    ],
    "Body Part": [
      {
        key: "neck",
        label: "Neck",
        value: "100"
      },
      {
        key: "chest",
        label: "Chest",
        value: "100"
      },
      {
        key: "shoulders",
        label: "Shoulders",
        value: "100"
      },
      {
        key: "left_bicep",
        label: "Left Bicep",
        value: "100"
      },
      {
        key: "right_bicep",
        label: "Right Bicep",
        value: "100"
      },
      {
        key: "left_forearm",
        label: "Left Forearm",
        value: "100"
      },
      {
        key: "right_forearm",
        label: "Right Forearm",
        value: "100"
      },
      {
        key: "waist",
        label: "Waist",
        value: "100"
      },
      {
        key: "hips",
        label: "Hips",
        value: "100"
      },
      {
        key: "left_thigh",
        label: "Left Thigh",
        value: "100"
      },
      {
        key: "right_thigh",
        label: "Right Thigh",
        value: "100"
      },
      {
        key: "left_calf",
        label: "Left Calf",
        value: "100"
      },
      {
        key: "right_calf",
        label: "Right Calf",
        value: "100"
      }
    ]
  }

  return (
    <ScreenWrapper>
      <ScrollView
        contentInset={{
          right: -10
        }}
      >
        {Object.entries(options).map(([key, values]) => {
          return (
            <View key={key} style={styles.groupWrapper}>
              <Text style={styles.groupTitle}>{key}</Text>
              {values.map(({label, value, unit = "cm"}) => {
                return (
                  <View key={label} style={styles.item}>
                    <Text style={styles.itemLabel}>{label}</Text>
                    <View style={styles.itemControls}>
                      <Text style={styles.itemValue}>
                        {value} {unit}
                      </Text>
                      <TouchableOpacity style={styles.itemControlsButton}>
                        <Icon fill={COLORS.WHITE} name="Plus" />
                      </TouchableOpacity>
                    </View>
                  </View>
                )
              })}
            </View>
          )
        })}
      </ScrollView>
    </ScreenWrapper>
  )
}
