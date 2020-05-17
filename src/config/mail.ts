interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'francisco@franciscovazcompany.pt',
      name: 'Email configurado na AMAZON SES',
    },
  },
} as IMailConfig;
