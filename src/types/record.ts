export type PlayerRecord = {
  id: number
  name: string
  lastName?: string
  age?: number
  score: number
}

export type RecordsDB = {
  updatedAt: string
  records: PlayerRecord[]
}
