import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './VariantsTable.css';

class VariantsTable extends Component {

  renderSuggestedSearchItems() {
    console.log(this.props.geneMatches);

  }

  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>GENE</TableCell>
              <TableCell align="left">NUCLEOTIDE CHANGE</TableCell>
              <TableCell align="left">PROTEIN CHANGE</TableCell>
              <TableCell align="left">ALIAS</TableCell>
              <TableCell align="left">REGION</TableCell>
              <TableCell align="left">REPORTED CLASSIFICATION</TableCell>
              <TableCell align="left">LAST EVALUATED</TableCell>
              <TableCell align="left">LAST UPDATED</TableCell>
              <TableCell align="left">MORE INFO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.variantsData.map((variant, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {variant['Gene']}
                  </TableCell>
                  <TableCell align="left">{variant['Nucleotide Change']}</TableCell>
                  <TableCell align="left">{variant['Protein Change']}</TableCell>
                  <TableCell align="left">{variant['Alias']}</TableCell>
                  <TableCell align="left">{variant['Region']}</TableCell>
                  <TableCell align="left">{variant['Reported Classification']}</TableCell>
                  <TableCell align="left">{variant['Last Evaluated']}</TableCell>
                  <TableCell align="left">{variant['Last Updated']}</TableCell>
                  <TableCell align="left">{variant['URL']}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default VariantsTable;
