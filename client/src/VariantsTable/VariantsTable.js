import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import GeneMappings from '../GeneMappings/GeneMappings.js';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  cell: {
    verticalAlign: 'top',
  },
  column: {
    paddingRight: '10px',
  },
};

class VariantsTable extends Component {

  render() {
    const {cell, column, root} = this.props.classes;
    return (
      <Paper className={root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={column} align="left">GENE</TableCell>
              <TableCell className={column} align="left">NUCLEOTIDE CHANGE</TableCell>
              <TableCell className={column} align="left">PROTEIN CHANGE</TableCell>
              <TableCell className={column} align="left">ALIAS</TableCell>
              <TableCell className={column} align="left">REGION</TableCell>
              <TableCell className={column} align="left">REPORTED CLASSIFICATION</TableCell>
              <TableCell className={column} align="left">LAST EVALUATED</TableCell>
              <TableCell className={column} align="left">LAST UPDATED</TableCell>
              <TableCell className={column} align="left">MORE INFO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.variantsData.map((variant, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className={cell} component="th">
                    {variant['Gene']}
                  </TableCell>
                  <TableCell className={cell} align="left">
                    <GeneMappings nucleotideChange={variant['Nucleotide Change']} mappings={variant['Other Mappings']} />
                  </TableCell>
                  <TableCell className={cell} align="left">{variant['Protein Change']}</TableCell>
                  <TableCell className={cell} align="left">{variant['Alias']}</TableCell>
                  <TableCell className={cell} align="left">{variant['Region']}</TableCell>
                  <TableCell className={cell} align="left">{variant['Reported Classification']}</TableCell>
                  <TableCell className={cell} align="left">{variant['Last Evaluated']}</TableCell>
                  <TableCell className={cell} align="left">{variant['Last Updated']}</TableCell>
                  <TableCell className={cell} align="left">{variant['URL']}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(VariantsTable);
