const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (emails) => {
  if (emails.trim().endsWith(',') || emails.trim().startsWith(',')) {
    return 'Invlaid input. No leading or trailing commas.';
  }

  const invalidEmails = emails
    .split(',')
    .map((email) => email.trim())
    .filter((email) => emailRegex.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails.join(',')}`;
  }

  return;
};

export default validateEmail;
