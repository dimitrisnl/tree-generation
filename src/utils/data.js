const fallbackText =
  '\
page 1\n\
  page 1.1\n\
    page 1.1.1\n\
    page 1.1.2\n\
      page 1.1.2.1\n\
  page 1.2\n\
    page 1.2.1\n\
  page 1.3\n\
    page 1.3.1\n\
    page 1.3.2\n\
      page 1.3.2.1\n\
  page 1.4\n\
  page 1.5\n\
page 2\n\
page 3\n\
  page 3.1\n\
    page 3.1.1\n\
  page 3.2\n\
page 4\n\
  page 4.1\n\
    page 4.1.1\n\
      page 4.1.1.1\n\
page 5\
';

const largerFallbackText = `${fallbackText}\n`.repeat(10);

export { fallbackText, largerFallbackText };
