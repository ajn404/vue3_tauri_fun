export const executeRustCode = (codeText: String | undefined) => {
  return new Promise((resolve, reject) => {
    fetch('https://play.rust-lang.org/execute', {
      method: 'post',
      body: JSON.stringify({
        channel: 'stable',
        mode: 'debug',
        edition: '2021',
        crateType: 'bin',
        tests: false,
        code: codeText,
        backtrace: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
