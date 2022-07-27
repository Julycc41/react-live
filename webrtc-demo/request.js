import axios from 'axios'

const serverApi = 'http://localhost:9999/api'

//验证房间是否存在

export const getRoomExists = async (roomId) => {
  const response = await axios.get(`${serverApi}/room-exists/${roomId}`)
  return response.data
}