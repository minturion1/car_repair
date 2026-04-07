import { useMutation } from '@tanstack/react-query';
import { createContact } from '../api/contacts';

export const useCreateContact = (options = {}) => {
    return useMutation({
        mutationFn: createContact,
        ...options,
    });
};