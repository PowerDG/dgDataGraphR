function compose (...funcs) {
    if (funcs.length === 0) {
      return arg => arg
    }
  
    if (funcs.length === 1) {
      return funcs[0]
    }
  
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
  }
  
  function console1(nextConsole) {
    return (message) => {
      console.log('console1开始');
      nextConsole(message);
      console.log('console1结束');
    }
  }
  
  function console2(nextConsole) {
    return (message) => {
      console.log('console2开始');
      nextConsole(message);
      console.log('console2结束');
    }
  }
  
  function console3(nextConsole) {
    return (message) => {
      console.log('console3开始');
      nextConsole(message);
      console.log('console3结束');
    }
  }
  
  const log = compose(console1, console2, console3)(console.log);
  
  log('我是Log');