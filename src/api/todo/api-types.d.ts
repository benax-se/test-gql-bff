export interface GeoRestApiDTO {
  lat: string;
  lng: string;
}

export interface AddressRestApiDTO {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoRestApiDTO;
}

export interface UserRestApiDTO {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressRestApiDTO;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface TodoRestApiDTO {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
