import { useMutation } from '@tanstack/react-query';
import { createAppointment } from '../api/appointments';

export const useCreateAppointment = (options = {}) => {
    return useMutation({
        mutationFn: createAppointment,
        ...options,
    });
};