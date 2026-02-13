import type { RecordsDB } from '../../../types/record'
import recordsDB from '../dbRecords.json'

const { records, updatedAt } = recordsDB as unknown as RecordsDB

export const lastRecordsUpdated = () => updatedAt

export const recordsList = () => records
