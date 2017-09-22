import {Thread} from '../thread/thread.model';
import {User} from '../user/user.model';

/**
 * Message represents one message being sent in a Thread
 */

export interface Message {
  id?: string;
  sentAt?: Date;
  isRead?: boolean;
  thread?: Thread;
  author: User;
  text: string;
}
