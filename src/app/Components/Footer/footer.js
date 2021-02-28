import { directive } from '@babel/types';
import React from 'react';
import './style.css';

const Footer = (props) => <footer className="footer">{props.children}</footer>;

export default Footer;
