interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('Nos dirigimo a la base de datos');
    if (user === 'admin' && password === '123456') {
      return true;
    }

    return false;
  }
}

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('Nos dirigimo a service');
    if (user === 'admin' && password === '123456') {
      return true;
    }

    return false;
  }
}

class LoginGoogleStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('Nos dirigimos a un GOOGLE de autenticacion');
    if (user === 'admin' && password === '123456') {
      return true;
    }

    return false;
  }
}

const auth = new LoginContext(new LoginDBStrategy());
auth.login('admin', '123456');
const resp = auth.login('admin', '123456');
console.log('resp: ', resp);

auth.setStrategy(new LoginServiceStrategy());
const resp2 = auth.login('admin', '123456');

console.log('resp2: ', resp2);

auth.setStrategy(new LoginGoogleStrategy());
const resp3 = auth.login('admin', '123456');

console.log('resp3: ', resp3);
