class Email {
  private _from: string;
  private _to: string;
  private _subject: string | undefined;
  private _mensage: string;

  constructor (from: string,
    to: string,
    subject: string,
    mensage: string
  ) {
    this._from = from;
    this._to = to;
    this.subject = subject;
    this._mensage = mensage;
  }

  //  valida se assunto da mensagem tem menos que 40 caracteres
  set subject(newValue: string) {
    if (newValue.length <= 40)
    this._subject = newValue;
  }

  // faz a leitura 
  get from() { return this._from }
  get to() { return this._to }
  get subject() { return this._subject || '' }
  get mensage() { return this._mensage }

  //  representação textual
  get content() {
    return `
    From ${this.from} to ${this.to}
    ${this.subject}

    ${this.mensage}`;
  }
}

//  modela lista de email

class MailList {
  constructor(private mailList: Email[] = []) { }

  get all(): Email[] { return [...this.mailList];}

  addEmail(newEmail: Email): void { this.mailList.push(newEmail); }

  removeEmail(mailToRemove: Email): void {
    this.mailList = this.mailList.filter((mail) =>
    (mail.from !== mailToRemove.from) &&
    (mail.to !== mailToRemove.to) &&
    (mail.subject !== mailToRemove.subject) &&
    (mail.mensage !== mailToRemove.mensage));
  }

  //  metodo para pegar o email de acordo com o parametro passado

  getByEmailFrom(mailAdress: string): Email[] {
    return this.mailList.filter((mail) => mail.from === mailAdress);
  }

  getByEmailTo(mailAdress: string): Email[] {
    return this.mailList.filter((mail) => mail.to === mailAdress);
  }

  getBySubject(searchString: string): Email[] {
    return this.mailList.filter((mail) => mail.subject.indexOf(searchString) !== -1);
  }
}

// criando email para testar

const email1 = new Email(
  'danni06@gmail.com',
  'marcosh.bello@gmail.com',
  'fatura',
  'Segue fatura do condominio desse mes'
);

const email2 = new Email(
  'marcosh.bello@gmail.com',
  'danni06@gmail.com',
  'agua',
  'Agua paga'
);

const email3 = new Email(
  'joao@gmail.com',
  'maria@gmail.com',
  'Netflix',
  'Nova serie no ar'
);

const email4 = new Email(
  'copel@gmail.com',
  'danni@gmail.com',
  'Copel',
  'Nova internet fibra'
);

const email5 = new Email(
  'dannibueno@gmail.com',
  'marcosh.bello@gmail.com',
  'fatura',
  'Segue fatura do condominio desse mes'
);

const personalMailList = new MailList([email1, email2, email5])
const merchMailList = new MailList([email3, email4])

console.log('---personalMailList.getByEmailFrom(\'danni06@gmail.com\'):');

personalMailList.getByEmailFrom('danni06@gmail.com').forEach((mail) => console.log(mail.content));
