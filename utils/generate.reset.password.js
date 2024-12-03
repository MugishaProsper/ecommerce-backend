export const generateRandomPassword = () => {
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const specialChars = '!@#$%&*+[]|?';
  
  const allChars = upperCaseChars + lowerCaseChars + numberChars + specialChars;
  
  let password = '';
  
  password += upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length));
  password += lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length));
  password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
  password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  
  for (let i = 4; i < 15; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  
  password = password.split('').sort(() => Math.random() - 0.5).join('');
  
  return password;
};

