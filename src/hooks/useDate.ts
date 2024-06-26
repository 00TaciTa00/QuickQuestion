type createdAt = string

const useDate = (createdAt: createdAt) => {
  const date = new Date(createdAt)

  const year = date.getUTCFullYear()
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const day = date.getUTCDate().toString().padStart(2, '0')

  return `${year}. ${month}. ${day}`
}

export default useDate
