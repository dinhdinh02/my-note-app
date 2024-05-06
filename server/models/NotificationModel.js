import mongoose from 'mongoose';
import { NotificationModel } from './NotificationModel.1';

export const notficationSchema = new mongoose.Schema({
  content: {
    type: String,
  },
}, { timestamps: true });

export default NotificationModel;
