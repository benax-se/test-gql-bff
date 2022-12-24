export interface GeoRestApiDTO {
  lat: string;
  lng: string;
}

export interface AddressRestApiDTO {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: GeoRestApiDTO
}

export interface UserRestApiDTO {
}

export interface TodoRestApiDTO {
  id: number;
  userId: number;
  title: string
  completed: boolean
}