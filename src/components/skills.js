import React, {Component} from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';


class Skills extends Component{
  render() {
    return (
      <Grid>
        <Cell col={3}>
            <div style={{display: 'flex', fontSize: '20px'}}>
              {this.props.skill}
            </div>
        </Cell>
            <Cell col={9}>
              <ProgressBar style={{margin: 'auto', width: '75%'}}
              progress={this.props.progress} />
          </Cell>

      </Grid>
    )
  }
}

export default Skills;
