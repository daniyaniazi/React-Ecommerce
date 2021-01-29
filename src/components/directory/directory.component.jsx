import React from "react";
import MenuItem from '../menu-items/menu-items.component';
import './directory.styles.scss'
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selector'
const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
            sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
)
const mapStateToProps = (state) => ({
    sections: selectDirectorySections(state)
})
export default connect(mapStateToProps)(Directory
);