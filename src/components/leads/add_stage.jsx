import React, { useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Collapse from '@material-ui/core/Collapse';

import { BoundInput } from 'components/shared/bound_input';
// title str,
// links str
// description str
// notes str
// lead_id int
// state str
// start_at datetime
// end_at datitime

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const requestId = (id) => `components/add-stage/${id}`;

export const AddStage = ({ lead_id, open }) => {
  const boundToStoreInputProps = {
    modelType: TYPE,
    requestId: requestId(lead_id),
  };

  const classes = useStyles();
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <form noValidate autoComplete="off">
        <BoundInput
          name="title"
          label="Title"
          margin="normal"
          className={classes.textField}
          fullWidth
          {...boundToStoreInputProps}
        />
        <BoundInput
          name="links"
          label="links"
          className={classes.textField}
          fullWidth
          {...boundToStoreInputProps}
        />
        <BoundInput
          name="description"
          label="Description"
          className={classes.textField}
          fullWidth
          {...boundToStoreInputProps}
        />
      </form>
    </Collapse>
  );
}

export default AddStage;
