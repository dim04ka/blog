import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';

const Contact = () => {
  console.log('');
  return (
    <Box p={10}>
      <Grid container direction="column" spacing={5}>
        <Grid item>
          <Typography>Контактная информация</Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item xs={3}>Адрес: РБ г.Минск</Grid>
            <Grid item xs={3}>Телефон: <a href="tel:+375298139867">+375298139867</a></Grid>
            <Grid item xs={3}>Email: <a href="mailto:dmitry.suhotsky@gmail.com">dmitry.suhotsky@gmail.com</a></Grid>
            <Grid item xs={3}>Дополнительно: <a href="Telegram.com">Telegram</a> <a href="Telegram.com">VIber</a></Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>форма</Grid>
            <Grid item>карта</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
