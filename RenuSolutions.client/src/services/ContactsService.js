import { AppState } from '../AppState.js'
import { Contact } from '../models/Contact.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService'

class ContactsService {
    async createContact() {
        try {
            const res = await api.get('/contacts')
            AppState.account = new Contact(res.data)
        } catch (error) {
            logger.error('Error with Contacts Services', error)
        }
    }
}

export const contactsService = new ContactsService()
