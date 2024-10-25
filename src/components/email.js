import React from 'react';
import { Button } from '@mui/material';

function EmailButton() {
  const email = 'support@qwiknotify.com';
  const subject = 'Your Subject Here';
  const body = 'Hello,\n\nYour message goes here.';

  return (
    <Button
      variant="contained"
      color="primary"
      href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
    >
      Send Email
    </Button>
  );
}

export default EmailButton;
