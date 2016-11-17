import Kisi from 'kisi-client'

const kisiClient = new Kisi()
kisiClient.setLoginSecret('94c2056abb993b570517f2d3a89c9b5a')

export const getLocks = async () => {
  try {
    const result = await kisiClient.get('locks')
    return result.data.map(item => ({
      id: item.id,
      name: item.name,
      unlockMessage: item.unlock_message
    }))
  } catch (e) {
    throw e
  }
}

export const unlock = async (lockId) => await kisiClient.post(`locks/${lockId}/unlock`)
