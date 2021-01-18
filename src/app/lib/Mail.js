import nodemailer from 'nodemailer';
import mailConfig from '../../config/mail';

exports default nodemailer.createTransport({ mailConfig});