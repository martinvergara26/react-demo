import React from 'react';
import Menu from '../../components/Menu'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  page: {
    overflow: 'auto',
    margin: 0,
    padding: 0,
    height: '90vh'
  },
  content: props => ({
    background: 'linear-gradient(90deg, rgba(61,51,255,1) 0%, rgba(139,139,250,1) 46%, rgba(182,229,238,1) 100%);',
    margin: 0,
    padding: props.fullSize ? 0 : theme.spacing(12),
    paddingTop: props.fullSize ? 0 : theme.spacing(4),
    paddingBottom: props.fullSize ? 0 : theme.spacing(4),
    minHeight: '100%',
    height: 'auto'
  }),
  footer: ({
    margin: 0,
    padding: 0
  }),
}));

export default function Layout (props) {
  const classes = useStyles(props);

  return [
      <CssBaseline key={'baseline'}/>,
      <Menu key={'menu'}
        title={props.title}
      />,
      <div key={'page'} className={classes.page}>
        <div key={'content'} className={classes.content}>
          {props.children}
        </div>
        <div key={'footer'} className={classes.footer}>
          {props.footer}
        </div>
      </div>
    ]

}