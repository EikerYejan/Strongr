export interface Category {
  id: number
  name: string
}

export interface Muscle {
  id: number
  name: string
  name_en: string
  image_url_main: string
  image_url_secondary: string
}

export interface Equipment {
  id: number
  name: string
}

export interface Image {
  id: number
  uuid: string
  exercise_base: number
  image: string
}

export interface SecondaryMuscle {
  id: number
  name: string
  name_en: string
  image_url_main: string
  image_url_secondary: string
}

export interface Video {
  id: number
  uuid: string
  exercise_base: number
  exercise_base_uuid: string
  video: string
  size: number
  duration: string
  width: number
  height: number
  codec: string
  codec_long: string
}

export interface Exercise {
  id: number
  uuid: string
  name: string
  exercise_base: number
  description: string
  creation_date: string
  category: Category
  muscles: Muscle[]
  equipment: Equipment[]
  images: Image[]
  secondaryMuscles: SecondaryMuscle[]
  video: Video
}
