import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { provider_id, date } = request.body;

    // Separamos em 2 pois o parseISO é apenas uma transformação
    // No entanto, o startOfHour já é regra de negócio
    const parsedDate = parseISO(date);
    // const appointmentDate = startOfHour(parsedDate);

    // em vez de new...
    // const createAppointment = new CreateAppointmentService();
    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      date: parsedDate,
      provider_id,
      user_id,
    });

    return response.json(appointment);
  }
}
