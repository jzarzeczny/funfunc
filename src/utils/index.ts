export const generateRandomID = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const length = 10 // Adjust the length as needed
  let result = ''

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return result
}

export function performOperation(time: number, callback: () => void) {
  return new Promise<void>((resolve) =>
    setTimeout(() => {
      callback()
      return resolve()
    }, time)
  )
}
