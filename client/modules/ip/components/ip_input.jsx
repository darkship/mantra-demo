import React from 'react';
import Input from '/client/modules/core/components/input';
const IpInput = (props) => (
 <Input type='text'  pattern='^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$' title='Ip address' {...props}/>
);

export default IpInput;
