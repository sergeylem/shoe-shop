import React from 'react';
import './directory.styles.scss';
import SECTIONS_DATA from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    state = {
        sections: SECTIONS_DATA
    }

    render() {
      return (
        <div className='directory-menu'>
           {
                  this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
              ))
           }
       </div>
      )
    }
}

export default Directory;