import { UserRestApiDTO } from './api-types';

export const mapUserFromDTO = (user: UserRestApiDTO) => ({
  ...user,
  id: user.id.toString(),
  address: {
    ...user.address,
    geo: {
      lat: parseFloat(user.address.geo.lat),
      lng: parseFloat(user.address.geo.lng)
    }
  }
})