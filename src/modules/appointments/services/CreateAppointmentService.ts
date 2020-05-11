import { startOfHour } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

// Para receber os dados no execute
interface IRequest {
  provider_id: string;
  user_id: string;
  date: Date;
}

/**
 * Dependency Inverion
 *  Em vez de instanciarmos o repositório ou qualquer outra dependencia
 *  vamos recebe-la no construtor
 */

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    provider_id,
    user_id,
    date,
  }: IRequest): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    // create cria apenas uma instancia do nosso model, o save GUARDA na BD
    const appointment = await this.appointmentsRepository.create({
      provider_id,
      user_id,
      date: appointmentDate,
    });

    // o save agora é feito dentro do create
    /* await appointmentsRepository.save(appointment); */

    return appointment;
  }
}

export default CreateAppointmentService;
