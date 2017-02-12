import React from 'react';
import IpEditor from './ip_editor'

const IpNew = (props) => (
<IpEditor {...props}>
<button type="submit" className="btn btn-default">Create</button>
</IpEditor>
);

export default IpNew;
