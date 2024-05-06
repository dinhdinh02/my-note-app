import mongoose from 'mongoose';
import { notficationSchema } from './NotificationModel';

export const NotificationModel = mongoose.model('Notification', notficationSchema);
